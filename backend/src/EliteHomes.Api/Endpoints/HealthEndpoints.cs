using EliteHomes.Api.Contracts;
using EliteHomes.Api.Health;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;

namespace EliteHomes.Api.Endpoints;

public static class HealthEndpoints
{
    public static RouteGroupBuilder MapHealthEndpoints(this RouteGroupBuilder group)
    {
        group.MapGet("/health", (GetHealthStatusUseCase useCase) =>
        {
            var timestamp = DateTimeOffset.UtcNow;
            var result = useCase.Execute();

            return Results.Ok(new ApiResponse<HealthStatusResponse>(
                result,
                new ApiMeta(timestamp.ToString("O"))));
        });

        return group;
    }
}
