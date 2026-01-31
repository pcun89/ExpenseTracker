using ExpenseApi.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ExpenseApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AnalyticsController : ControllerBase
    {
        private readonly ExpenseDbContext _db;

        public AnalyticsController(ExpenseDbContext db)
        {
            _db = db;
        }

        [HttpGet("monthly")]
        public async Task<IActionResult> GetMonthlyAnalytics()
        {
            // 1️⃣ Load expenses into memory
            var expenses = await _db.Expenses.ToListAsync();

            // 2️⃣ Group + aggregate in C#
            var result = expenses
                .GroupBy(e => new
                {
                    e.Date.Year,
                    e.Date.Month,
                    e.Category
                })
                .Select(g => new
                {
                    year = g.Key.Year,
                    month = g.Key.Month,
                    category = g.Key.Category,
                    total = g.Sum(e => e.Amount)
                })
                .OrderBy(r => r.year)
                .ThenBy(r => r.month)
                .ToList();

            return Ok(result);
        }
        [HttpGet("categories")]
        public async Task<IActionResult> GetCategoryTotals()
        {
            var expenses = await _db.Expenses.ToListAsync();

            var result = expenses
                .GroupBy(e => e.Category)
                .Select(g => new
                {
                    category = g.Key,
                    total = g.Sum(e => e.Amount)
                })
                .OrderByDescending(r => r.total)
                .ToList();

            return Ok(result);
        }

    }
}

