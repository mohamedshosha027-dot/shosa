using EliteHomes.Api.Health;
using Microsoft.Extensions.DependencyInjection;

namespace EliteHomes.Api.Extensions;

public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddEliteHomesServices(this IServiceCollection services)
    {
        services.AddScoped<GetHealthStatusUseCase>();

        return services;
    }
}
