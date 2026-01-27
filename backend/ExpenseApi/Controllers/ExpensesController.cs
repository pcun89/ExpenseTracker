using Microsoft.AspNetCore.Mvc;

namespace ExpenseApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ExpensesController : ControllerBase
    {
        private static readonly List<Expense> Expenses = new();

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(Expenses);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Expense expense)
        {
            expense.Id = Expenses.Count + 1;
            Expenses.Add(expense);
            return CreatedAtAction(nameof(GetAll), expense);
        }
    }

    public class Expense
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
    }
}
