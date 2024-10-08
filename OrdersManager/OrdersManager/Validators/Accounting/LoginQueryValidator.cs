using FluentValidation;
using OrdersManager.CQRS.Queries.Accounting;

namespace OrdersManager.Validators.Accounting;

///<inheritdoc/>
public class LoginQueryValidator : AbstractValidator<LoginQuery>
{
    /// <summary>
    /// Initializes a new instance of the <see cref="LoginQueryValidator"/> class.
    /// </summary>
    public LoginQueryValidator()
    {
        RuleFor(x => x.UserName).NotEmpty();
        RuleFor(x => x.Password).NotEmpty().Length(2, 12);
    }

}
