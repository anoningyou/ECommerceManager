using AutoMapper;
using Common.API.Controllers;
using Common.API.CQRS.Dispatchers;
using Common.Enums;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OrdersManager.CQRS.Commands.Accounting;
using OrdersManager.CQRS.Queries.Accounting;
using OrdersManager.Data.Entities.Accounting;
using OrdersManager.DTO.Accounting;
using OrdersManager.Services.Interfaces;

namespace OrdersManager.Controllers;

/// <remarks>
/// Represents a controller for managing user accounts.
/// </remarks>
public class AccountController(
    IDispatcher dispatcher,
    UserManager<AppUser> userManager,
    ITokenService tokenService,
    IMapper mapper) : BaseApiController(dispatcher)
{
    #region private fields
    
    private readonly UserManager<AppUser> _userManager = userManager;
    private readonly ITokenService _tokenService = tokenService;
    private readonly IMapper _mapper = mapper;
    private static readonly string[] _errorIsTaken = ["Username is taken"];

    #endregion private fields

    #region public

    /// <summary>
    /// Registers a new user.
    /// </summary>
    /// <param name="registerDto">The registration information.</param>
    /// <param name="cancellationToken">The cancellation token.</param>
    /// <returns>The registered user.</returns>
    [HttpPost(nameof(Register))]
    public async Task<ActionResult<UserDto>> Register(
        RegisterCommand registerDto,
        CancellationToken cancellationToken
    )
    {
        string normalizedUserName = registerDto.UserName.ToLower();
        if (await UserExistAsync(normalizedUserName, cancellationToken))
            return BadRequest(_errorIsTaken);

        AppUser user = _mapper.Map<AppUser>(registerDto);
        
        user.NormalizedUserName = normalizedUserName;

        IdentityResult result = await _userManager.CreateAsync(user, registerDto.Password);

        if (!result.Succeeded)
            return BadRequest(result.Errors.Select(e => e.Description));

        IdentityResult roleResult = await _userManager.AddToRoleAsync(user, RolesEnum.User.ToString());

        if (!roleResult.Succeeded) {
            return BadRequest(roleResult.Errors.Select(e => e.Description));
        }

        UserDto userDto = _mapper.Map<UserDto>(user);
        userDto.Token = await _tokenService.CreateToken(user);  

        return userDto;
    }

    /// <summary>
    /// Logs in a user.
    /// </summary>
    [HttpPost(nameof(Login))]
    public async Task<ActionResult<UserDto>> Login(
        LoginQuery loginDto,
        CancellationToken cancellationToken
    )
    {
        AppUser user = await _userManager.Users
        .SingleOrDefaultAsync(x => x.NormalizedUserName == loginDto.UserName.ToUpper(), cancellationToken);

        if (user == null) {
            return Unauthorized("Invalid username");
        }

        bool result = await _userManager.CheckPasswordAsync(user, loginDto.Password);

        if (!result) {
            return Unauthorized("Invalid password");
        }

        UserDto userDto = _mapper.Map<UserDto>(user);
        userDto.Token = await _tokenService.CreateToken(user);  

        return userDto;
    }

    #endregion public

    #region private

    /// <summary>
    /// Checks if a user exists.
    /// </summary>
    /// <param name="userName">The username to check.</param>
    /// <param name="cancellationToken">The cancellation token.</param>
    private async Task<bool> UserExistAsync(string userName, CancellationToken cancellationToken)
    {
        return await _userManager.Users.AnyAsync(u => u.NormalizedUserName == userName, cancellationToken);
    }

    #endregion private
    
}
