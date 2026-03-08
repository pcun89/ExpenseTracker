using Microsoft.AspNetCore.Mvc;

namespace ExpenseTracker.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AnalyticsController : ControllerBase
{
    [HttpGet("categories")]
    public IActionResult Categories()
    {
        return Ok(new object[] { });
    }

    [HttpGet("monthly")]
    public IActionResult Monthly()
    {
        return Ok(new object[] { });
    }
}