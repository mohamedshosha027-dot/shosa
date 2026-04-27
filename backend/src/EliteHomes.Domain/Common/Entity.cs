namespace EliteHomes.Domain.Common;

public abstract class Entity<TId>
    where TId : notnull
{
    protected Entity(TId id)
    {
        Id = id;
    }

    public TId Id { get; }

    public bool Equals(Entity<TId>? other)
    {
        return other is not null && EqualityComparer<TId>.Default.Equals(Id, other.Id);
    }
}

