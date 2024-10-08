using Common.Interfaces.Pagination;

namespace Common.Helpers.Pagination
{
    /// <summary>
    /// Represents the parameters for pagination, including page number and page size.
    /// </summary>
    public class PaginationParams : IPaginationParams
    {

        #region private members

        /// <summary>
        /// The maximum allowed page size.
        /// </summary>
        private const int _maxPageSize = 50;

        /// <summary>
        /// The page size.
        /// </summary>
        private int _pageSize = 10;

        #endregion private members

        #region public properties

        //// <summary>
        /// Gets or sets the page number. Default value is 1.
        /// </summary>
        public int PageNumber { get; set; } = 1;

        /// <summary>
        /// Gets or sets the page size. If the value exceeds the maximum page size, it will be set to the maximum page size.
        /// Default value is 10.
        /// </summary>
        public int PageSize
        {
            get => _pageSize;
            set => _pageSize = (value > _maxPageSize)
                                ? _maxPageSize
                                : value;
        }

        #endregion public properties
    }
}
