using ExpenseApi.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// --------------------
// Add services
// --------------------

builder.Services.AddControllers();

/*
 SQLite must be stored in /tmp for Cloud Run
 because the container filesystem is read-only
*/
builder.Services.AddDbContext<ExpenseDbContext>(options =>
    options.UseSqlite("Data Source=/tmp/expenses.db")
);

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// --------------------
// Build app
// --------------------

var app = builder.Build();

// --------------------
// Middleware
// --------------------

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();

app.MapControllers();

/*
 Health endpoint for Cloud Run
*/
app.MapGet("/", () => new
{
    service = "expense-api",
    status = "running",
    timestamp = DateTime.UtcNow
});

// --------------------
// Auto-create database
// --------------------

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<ExpenseDbContext>();
    db.Database.Migrate();
}

app.Run();



