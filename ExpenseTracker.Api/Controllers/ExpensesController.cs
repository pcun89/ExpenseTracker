using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[AllowAnonymous]
[ApiController]
[Route("api/[controller]")]
public class ExpensesController : ControllerBase
{
    private static readonly List<object> Expenses = new();

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(Expenses);
    }

    [HttpPost]
    public IActionResult Post([FromBody] object expense)
    {
        Expenses.Add(expense);
        return Ok(expense);
    }
}
