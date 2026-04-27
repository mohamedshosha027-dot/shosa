using System.ComponentModel.DataAnnotations;

namespace EliteHomes.Api.Configuration;

public sealed class InfrastructureSettings
{
    public const string SectionName = "Infrastructure";

    [MinLength(1)]
    public string DatabaseUrl { get; init; } =
        "Host=localhost;Port=5432;Database=elitehomes;Username=postgres;Password=postgres";

    [MinLength(1)]
    public string RedisUrl { get; init; } = "localhost:6379";
}

