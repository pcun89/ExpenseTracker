namespace ExpenseApi.Models
{
    public class Expense
    {
        public int Id { get; set; }

        public string Title { get; set; } = string.Empty;

        public decimal Amount { get; set; }

        public string Category { get; set; } = "General";

        public DateTime Date { get; set; }
    }
}