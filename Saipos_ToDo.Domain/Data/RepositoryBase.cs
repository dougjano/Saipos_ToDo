using Microsoft.EntityFrameworkCore;

namespace Saipos_ToDo.Domain.Data
{
    public abstract class RepositoryBase
    {
        protected DbContext _context;

        public abstract void Save(object entity);

        public abstract object Get(int id);
    }
}
