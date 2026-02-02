# Expense Tracker (Full-Stack)

A full-stack expense tracking application built with
ASP.NET Core, Entity Framework Core, SQLite, and React.

## Features
- CRUD expense management
- Analytics dashboard (category & monthly charts)
- Pagination & filtering
- Clean architecture using DTOs
- RESTful API design

## Tech Stack
Backend:
- ASP.NET Core Web API
- Entity Framework Core
- SQLite

Frontend:
- React (Vite)
- Recharts
- Fetch API

## Architecture
- Controllers
- DTOs (decoupled API layer)
- EF Core DbContext
- REST endpoints

## Example Endpoints
GET /api/expenses?page=1&pageSize=10  
GET /api/analytics/categories  

## Run Locally
Backend:
```bash
dotnet run
