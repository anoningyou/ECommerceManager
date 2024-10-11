namespace Common.Extensions;

/// <summary>
/// Represents the extensions for the DateTime class.
/// </summary>
public static class DateExtensions
{
    /// <summary>
    /// Generates a random date between the initial and final dates.
    /// </summary>
    public static DateTime Random(DateTime initialDate, DateTime finalDate, Random? random = null)
    {
        random ??= new Random();
        int range = (finalDate - initialDate).Days;
        DateTime newDate =  initialDate.AddDays(random.Next(0, range));

        return new DateTime(newDate.Year, newDate.Month, newDate.Day, random.Next(0, 23), random.Next(0, 59), random.Next(0, 59));
    }


}
