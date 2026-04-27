using System.ComponentModel.DataAnnotations;

namespace EliteHomes.Api.Configuration;

public sealed class AuthSettings
{
    public const string SectionName = "Auth";

    [MinLength(1)]
    public string AccessTokenTtl { get; init; } = "00:15:00";

    [MinLength(1)]
    public string RefreshTokenTtl { get; init; } = "7.00:00:00";
}

