namespace EliteHomes.Application.Abstractions;

public interface IUseCase<out TResponse>
{
    TResponse Execute();
}

