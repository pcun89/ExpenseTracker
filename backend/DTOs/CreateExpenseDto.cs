namespace ExpenseApi.DTOs;

public class CreateExpenseDto
{
    public string Title { get; set; } = "";
    public decimal Amount { get; set; }
    public string Category { get; set; } = "";
    public DateTime Date { get; set; }
}
