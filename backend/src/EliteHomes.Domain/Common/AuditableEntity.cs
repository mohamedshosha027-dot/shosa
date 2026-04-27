namespace EliteHomes.Domain.Common;

public abstract class AuditableEntity<TId> : Entity<TId>
    where TId : notnull
{
    protected AuditableEntity(TId id, DateTime createdAt, DateTime updatedAt)
        : base(id)
    {
        CreatedAt = createdAt;
        UpdatedAt = updatedAt;
    }

    public DateTime CreatedAt { get; }

    public DateTime UpdatedAt { get; private set; }

    public void Touch(DateTime updatedAt)
    {
        UpdatedAt = updatedAt;
    }
}

