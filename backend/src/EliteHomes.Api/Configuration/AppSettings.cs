using System.ComponentModel.DataAnnotations;

namespace EliteHomes.Api.Configuration;

public sealed class AppSettings
{
    public const string SectionName = "App";

    [Range(1, 65535)]
    public int Port { get; init; } = 5000;

    [MinLength(1)]
    public string ApiPrefix { get; init; } = "api/v1";

    [MinLength(1)]
    public string CorsOrigin { get; init; } = "*";
}

