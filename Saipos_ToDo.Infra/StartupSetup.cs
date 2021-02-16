using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Saipos_ToDo.Crosscutting.Settings;
using Saipos_ToDo.Infra.Data;

namespace Saipos_ToDo.Infra
{
    public static class StartupSetup
    {
        public static void AddDbContext(this IServiceCollection services) =>
            services.AddDbContext<ToDoDbContext>(options =>
                options.UseSqlite(new GlobalOptions().Connection_String));
    }
}
