using FluentValidation;
using OrdersManager.CQRS.Queries.Reports;

namespace OrdersManager.Validators.Reports;

///<inheritdoc/>
public class GetCustomerReportQueryValidator : AbstractValidator<GetCustomerReportQuery>
{
    /// <summary>
    /// Initializes a new instance of the <see cref="GetCustomerReportQueryValidator"/> class.
    /// </summary>
    public GetCustomerReportQueryValidator()
    {
        RuleFor(x => x.CustomerId).NotEmpty();
        RuleFor(x => x.StartDate).NotEmpty();
        RuleFor(x => x.EndDate).NotEmpty();
        RuleFor(x => x.EndDate).NotEmpty().GreaterThan(x => x.StartDate);
    }

}
