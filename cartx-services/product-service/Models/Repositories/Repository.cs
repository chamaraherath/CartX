using Microsoft.EntityFrameworkCore;
using ProductService.Data;

namespace ProductService.Models.Repositories
{
    public class Repository<T>(ProductServiceDBContext _context) : IRepository<T> where T : class
    {
        private readonly DbSet<T> _entities = _context.Set<T>();

        public async Task AddAsync(T entity)
        {
            await _entities.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await GetByIdAsync(id);
            _entities.Remove(entity);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await _entities.ToListAsync();
        }

        public async Task<T> GetByIdAsync(int id)
        {
            return await _entities.FindAsync(id);
        }

        public async Task UpdateAsync(T entity)
        {
            _entities.Update(entity);
            await _context.SaveChangesAsync();
        }

    }
}