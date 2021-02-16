using Microsoft.EntityFrameworkCore;
using Saipos_ToDo.Domain.Data;
using Saipos_ToDo.Domain.PanelAggregate;
using Saipos_ToDo.Infra.Data;
using System.Collections.Generic;
using System.Linq;

namespace Saipos_ToDo.Infra.Repositories
{
    public class TaskRepository : RepositoryBase
    {
        public TaskRepository(DbContext context)
        {
            _context = context;
        }

        public override object Get(int id)
        {
            return ((ToDoDbContext)_context).Tasks.Include(x => x.Owner).SingleOrDefault(x => x.Id == id);
        }

        public List<Task> GetAll()
        {
            return ((ToDoDbContext)_context).Tasks.Include(x => x.Owner).ToList();
        }

        public override void Save(object entity)
        {
            if (((Task)entity).Id != 0)
            {
                _context.Update(entity);
            }
            else
            {
                _context.Add(entity);
            }

            _context.SaveChanges();
        }
    }
}
