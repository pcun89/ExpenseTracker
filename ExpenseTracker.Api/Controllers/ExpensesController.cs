using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
[AllowAnonymous]  
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
