using System.Linq.Expressions;
using AutoMapper.QueryableExtensions;
using Common.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Query;

namespace Common.DAL.Repositories;


///<inheritdoc/>
/// <summary>
/// Represents a generic repository implementation that provides CRUD operations for entities.
/// </summary>
/// <typeparam name="TEntity">The type of the entity.</typeparam>
/// <typeparam name="TPrimaryKey">The type of the primary key of the entity.</typeparam>
/// <remarks>
/// Initializes a new instance of the <see cref="Repository{TEntity, TPrimaryKey}"/> class.
/// </remarks>
/// <param name="context">The database context.</param>
public class Repository<TEntity, TPrimaryKey>(DbContext context) : BaseRepository<TEntity, TPrimaryKey>(context), IRepository<TEntity, TPrimaryKey>
where TEntity : class, IIdentifiable<TPrimaryKey>
{

    #region add

    ///<inheritdoc/>
    public virtual TEntity Add(TEntity entity)
    {
        return _dbSet.Add(entity).Entity;
    }

    ///<inheritdoc/>
    public virtual async Task<TEntity> AddAsync(TEntity entity, CancellationToken cancellationToken = default)
    {
        EntityEntry<TEntity> result = await _dbSet.AddAsync(entity, cancellationToken);

        return result.Entity;
    }

    ///<inheritdoc/>
    public virtual void AddRange(IEnumerable<TEntity> entityList)
    {
        if (entityList?.Any() != true)
            return;

        _dbSet.AddRange(entityList);
    }

    ///<inheritdoc/>
    public virtual Task AddRangeAsync(IEnumerable<TEntity> entityList, CancellationToken cancellationToken = default)
    {
        if (entityList?.Any() != true)
            return Task.CompletedTask;

        return _context.AddRangeAsync(entityList, cancellationToken);
    }

    #endregion add

    #region update

    ///<inheritdoc/>
    public virtual TEntity Update(TEntity entity)
    {
        return _dbSet.Update(entity).Entity;
    }

    ///<inheritdoc/>
    public virtual void UpdateRange(IEnumerable<TEntity> entityList)
    {
        if (!entityList?.Any() != true)
            return;

        _dbSet.UpdateRange(entityList);
    }

    #endregion update

    #region get

    ///<inheritdoc/>
    public virtual Task<bool> ExistsAsync(
        Expression<Func<TEntity, bool>> predicate,
        CancellationToken cancellationToken = default)
    {
        return _dbSet.AsNoTracking().AnyAsync(predicate, cancellationToken);
    }

    ///<inheritdoc/>
    public Task<TEntity> GetAsync(
        TPrimaryKey id,
        Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>> include = null,
        bool enableTracking = true,
        CancellationToken cancellationToken = default)
    {
        return GetAsync(e => e.Id.Equals(id), include, enableTracking, cancellationToken);
    }

    ///<inheritdoc/>
    public virtual Task<TEntity> GetAsync(
        Expression<Func<TEntity, bool>> predicate, Func<IQueryable<TEntity>,
        IIncludableQueryable<TEntity, object>> include = null,
        bool enableTracking = false,
        CancellationToken cancellationToken = default)
    {
        IQueryable<TEntity> query = _dbSet;
        
        if (!enableTracking) 
            query = query.AsNoTracking();
        if (include != null) 
            query = include(query);
        if (predicate != null) 
            query = query.Where(predicate);

        return query.FirstOrDefaultAsync(cancellationToken);
    }

    ///<inheritdoc/>
    public Task<TResult> GetAsync<TResult>(
        TPrimaryKey id,
        AutoMapper.IConfigurationProvider configurationProvider,
        Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>> include = null,
        bool enableTracking = true,
        CancellationToken cancellationToken = default)
    where TResult : class
    {
        return GetAsync<TResult>(e => e.Id.Equals(id),
            configurationProvider,
            include,
            enableTracking,
            cancellationToken);
    }

    ///<inheritdoc/>
    public virtual Task<TResult> GetAsync<TResult>(
        Expression<Func<TEntity, bool>> predicate,
        AutoMapper.IConfigurationProvider configurationProvider,
        Func<IQueryable<TEntity>,IIncludableQueryable<TEntity, object>> include = null,
        bool enableTracking = false,
        CancellationToken cancellationToken = default)
    where TResult : class
    {
        IQueryable<TEntity> query = _dbSet;
        
        if (!enableTracking) 
            query = query.AsNoTracking();
        if (include != null) 
            query = include(query);
        if (predicate != null) 
            query = query.Where(predicate);
        return query.ProjectTo<TResult>(configurationProvider).FirstOrDefaultAsync(cancellationToken);
    }

    ///<inheritdoc/>
    public virtual Task<TEntity> FirstOrDefaultAsync(
        Expression<Func<TEntity, bool>> predicate = null,
        Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
        Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>> include = null,
        bool enableTracking = false,
        CancellationToken cancellationToken = default,
        bool ignoreQueryFilters = false)
    {
        IQueryable<TEntity> query = _dbSet;
        if (!enableTracking) 
            query = query.AsNoTracking();
        if (include != null) 
            query = include(query);
        if (predicate != null) 
            query = query.Where(predicate);

        return query.FirstOrDefaultAsync(cancellationToken);
    }

    ///<inheritdoc/>
    public virtual Task<List<TResult>> GetListAsync<TResult>(
        Expression<Func<TEntity, TResult>> selector = null,
        Expression<Func<TEntity, bool>> predicate = null,
        Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
        Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>> include = null,
        AutoMapper.IConfigurationProvider configurationProvider = null,
        bool enableTracking = false,
        CancellationToken cancellationToken = default,
        bool ignoreQueryFilters = false)
    where TResult : class
    {
        return GetAll(
            selector,
            predicate,
            orderBy,
            include,
            configurationProvider,
            enableTracking,
            ignoreQueryFilters
            )
            .ToListAsync(cancellationToken);
    }

    ///<inheritdoc/>
    public virtual Task<List<TResult>> GetListAsync<TResult>(
        List<TPrimaryKey> primaryKeys,
        Expression<Func<TEntity, TResult>> selector,
        Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
        Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>> include = null,
        AutoMapper.IConfigurationProvider configurationProvider = null,
        bool enableTracking = false,
        CancellationToken cancellationToken = default,
        bool ignoreQueryFilters = false)
    where TResult : class
    {
        Expression<Func<TEntity, bool>> predicate = x => primaryKeys.Contains(x.Id);
        return GetListAsync(selector, predicate, orderBy, include, configurationProvider, enableTracking, cancellationToken, ignoreQueryFilters);
    }

    ///<inheritdoc/>
    public virtual IQueryable<TResult> GetAll<TResult>(
        Expression<Func<TEntity, TResult>> selector = null,
        Expression<Func<TEntity, bool>> predicate = null,
        Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
        Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>> include = null,
        AutoMapper.IConfigurationProvider configurationProvider = null,
        bool enableTracking = false,
        bool ignoreQueryFilters = false)
    where TResult : class
    {
        IQueryable<TEntity> query = _dbSet;
        if (!enableTracking)
            query = query.AsNoTracking();
        if (include != null)
            query = include(query);
        if (predicate != null)
            query = query.Where(predicate);
        if (ignoreQueryFilters)
            query = query.IgnoreQueryFilters();           
        if (orderBy != null)
            return orderBy(query).Select(selector);

        if (selector != null)
            return query.Select(selector);
        else if (configurationProvider != null && typeof(TEntity) != typeof(TResult))
            return query.ProjectTo<TResult>(configurationProvider);
        else {
            selector = entity => entity is TResult
                ? (TResult)(object)entity
                : default;
            return query.Select(selector);
        }
    }

    #endregion get

    #region delete

    ///<inheritdoc/>
    public virtual void Remove(TEntity entity)
    {
        _dbSet.Remove(entity);
    }

    ///<inheritdoc/>
    public virtual void Remove(TPrimaryKey id)
    {
        TEntity entity = Activator.CreateInstance<TEntity>();
        entity.Id = id;

        Remove(entity);
    }

    ///<inheritdoc/>
    public virtual void RemoveRange(IEnumerable<TEntity> entityList)
    {
        _dbSet.RemoveRange(entityList);
    }

    public IQueryable<TResult> GetAll<TResult>(Expression<Func<TEntity, TResult>> selector = null, Expression<Func<TEntity, bool>> predicate = null, Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null, Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>> include = null, bool enableTracking = false, bool ignoreQueryFilters = false) where TResult : class
    {
        throw new NotImplementedException();
    }

    #endregion delete

}
