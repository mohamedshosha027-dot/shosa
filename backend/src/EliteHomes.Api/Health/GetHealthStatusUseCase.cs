namespace EliteHomes.Api.Health;

public sealed class GetHealthStatusUseCase
{
    public HealthStatusResponse Execute()
    {
        return new HealthStatusResponse("EliteHomes Backend", "ok", "v1");
    }
}

