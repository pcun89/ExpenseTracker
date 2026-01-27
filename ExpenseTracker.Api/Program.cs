var builder = WebApplication.CreateBuilder(args);

// =====================
// Services
// =====================
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// =====================
// Middleware
// =====================
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors();

// =====================
// Health Check
// =====================
app.MapGet("/", () => new
{
    service = "expense-api-dotnet",
    status = "running",
    timestamp = DateTime.UtcNow
});

// =====================
// Controllers
// =====================
app.MapControllers();

app.Run();

