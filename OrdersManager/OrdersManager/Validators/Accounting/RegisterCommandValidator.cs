using FluentValidation;
using OrdersManager.CQRS.Commands.Accounting;

namespace OrdersManager.Validators.Accounting;

///<inheritdoc/>
public class RegisterCommandValidator : AbstractValidator<RegisterCommand>
{
    /// <summary>
    /// Initializes a new instance of the <see cref="RegisterCommandValidator"/> class.
    /// </summary>
    public RegisterCommandValidator()
    {
        RuleFor(x => x.UserName).NotEmpty();
        RuleFor(x => x.Password).NotEmpty().Length(2, 12);
    }

}
