using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace EliteHomes.Api.Configuration;

public static class ConfigurationExtensions
{
    public static IServiceCollection AddAppConfiguration(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        services
            .AddOptions<AppSettings>()
            .Bind(configuration.GetSection(AppSettings.SectionName))
            .ValidateDataAnnotations()
            .ValidateOnStart();

        services
            .AddOptions<InfrastructureSettings>()
            .Bind(configuration.GetSection(InfrastructureSettings.SectionName))
            .ValidateDataAnnotations()
            .ValidateOnStart();

        services
            .AddOptions<AuthSettings>()
            .Bind(configuration.GetSection(AuthSettings.SectionName))
            .ValidateDataAnnotations()
            .ValidateOnStart();

        services.AddSingleton(static serviceProvider =>
            serviceProvider.GetRequiredService<IOptions<AppSettings>>().Value);
        services.AddSingleton(static serviceProvider =>
            serviceProvider.GetRequiredService<IOptions<InfrastructureSettings>>().Value);
        services.AddSingleton(static serviceProvider =>
            serviceProvider.GetRequiredService<IOptions<AuthSettings>>().Value);

        return services;
    }
}
