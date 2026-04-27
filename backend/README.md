# EliteHomes Backend

This directory contains the .NET backend scaffold for EliteHomes.

## Technology

- .NET 10
- ASP.NET Core Web API
- clean-architecture-oriented project split

## Current Scope

This backend currently includes:

- ASP.NET Core API project bootstrap
- solution and project structure for `Api`, `Application`, `Domain`, and `Infrastructure`
- typed application configuration and startup validation
- a health endpoint under `/api/v1/health`
- shared domain and application primitives for the next backend tasks

## Projects

- `src/EliteHomes.Api`
- `src/EliteHomes.Application`
- `src/EliteHomes.Domain`
- `src/EliteHomes.Infrastructure`

## Getting Started

1. Restore:

   ```powershell
   dotnet restore .\EliteHomes.slnx --configfile .\NuGet.Config
   ```

2. Run:

   ```powershell
   dotnet run --project .\src\EliteHomes.Api
   ```

3. Visit `http://localhost:5000/api/v1/health`.

