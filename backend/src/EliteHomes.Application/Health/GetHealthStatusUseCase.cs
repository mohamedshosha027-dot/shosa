using EliteHomes.Application.Abstractions;

namespace EliteHomes.Application.Health;

public sealed class GetHealthStatusUseCase : IUseCase<HealthStatusResponse>
{
    public HealthStatusResponse Execute()
    {
        return new HealthStatusResponse("EliteHomes Backend", "ok", "v1");
    }
}

