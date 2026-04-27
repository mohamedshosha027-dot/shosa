namespace EliteHomes.Application.Health;

public sealed record HealthStatusResponse(string Service, string Status, string Version);

