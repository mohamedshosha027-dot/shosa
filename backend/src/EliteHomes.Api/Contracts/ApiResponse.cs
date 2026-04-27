namespace EliteHomes.Api.Contracts;

public sealed record ApiResponse<T>(T Data, ApiMeta Meta);

