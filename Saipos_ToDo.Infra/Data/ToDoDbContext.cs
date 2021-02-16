using Microsoft.EntityFrameworkCore;
using Saipos_ToDo.Domain.PanelAggregate;

namespace Saipos_ToDo.Infra.Data
{
    public class ToDoDbContext : DbContext
    {
        public ToDoDbContext(DbContextOptions<ToDoDbContext> options) : base(options)
        {

        }

        public DbSet<Task> Tasks { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Task>().HasKey(x => x.Id);
            builder.Entity<Task>().HasOne<User>(x => x.Owner);

            builder.Entity<User>().HasKey(x => x.Id);

            base.OnModelCreating(builder);
        }
    }
}
