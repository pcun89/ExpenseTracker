namespace ExpenseApi.DTOs
{
    public class MonthlyAnalyticsDto
    {
        public string Month { get; set; } = string.Empty;
        public decimal Total { get; set; }
        public List<CategoryTotalDto> Categories { get; set; } = new();
    }

    public class CategoryTotalDto
    {
        public string Category { get; set; } = string.Empty;
        public decimal Total { get; set; }
    }
}
