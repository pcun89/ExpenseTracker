using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ExpenseApi.Data;
using ExpenseApi.Models;

namespace ExpenseApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ExpensesController : ControllerBase
    {
        private readonly ExpenseDbContext _db;

        public ExpensesController(ExpenseDbContext db)
        {
            _db = db;
        }

        // GET /api/expenses?limit=10&offset=0&category=Food
        [HttpGet]
        public async Task<IActionResult> GetAll(
            int limit = 10,
            int offset = 0,
            string? category = null
        )
        {
            var query = _db.Expenses.AsQueryable();

            if (!string.IsNullOrEmpty(category))
            {
                query = query.Where(e => e.Category == category);
            }

            var total = await query.CountAsync();

            var items = await query
                .OrderByDescending(e => e.Date)
                .Skip(offset)
                .Take(limit)
                .ToListAsync();

            return Ok(new
            {
                total,
                items
            });
        }

        // POST /api/expenses
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Expense expense)
        {
            expense.Date = expense.Date == default
                ? DateTime.UtcNow
                : expense.Date;

            _db.Expenses.Add(expense);
            await _db.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAll), new { id = expense.Id }, expense);
        }

        // PUT /api/expenses/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Expense updated)
        {
            var existing = await _db.Expenses.FindAsync(id);
            if (existing == null)
                return NotFound();

            existing.Title = updated.Title;
            existing.Amount = updated.Amount;
            existing.Category = updated.Category;
            existing.Date = updated.Date;

            await _db.SaveChangesAsync();
            return NoContent();
        }

        // DELETE /api/expenses/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var expense = await _db.Expenses.FindAsync(id);
            if (expense == null)
                return NotFound();

            _db.Expenses.Remove(expense);
            await _db.SaveChangesAsync();

            return NoContent();
        }
    }
}

