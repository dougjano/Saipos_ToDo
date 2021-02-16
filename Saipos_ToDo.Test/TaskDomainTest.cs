using Saipos_ToDo.Domain.PanelAggregate;
using System.Collections.Generic;
using Xunit;

namespace Saipos_ToDo.Test
{
    public class TaskDomainTest
    {
        private string OwnerName = "Jano";
        private string OwnerEmail = "jano@gamil.com";

        [Theory]
        [InlineData("task001", "description001", 1000)]
        public void IsTaskPanelCreated_ShouldPass(string title, string description, int numberOfRows)
        {
            Panel panel;
            List<Task> tasks = new List<Task>();

            for (int i = 0; i < numberOfRows; i += 1)
            {
                tasks.Add(new Task(title, description, new User(OwnerName, OwnerEmail)));
            }

            panel = new Panel(tasks);

            Assert.Equal(numberOfRows, panel.Tasks.Count);
        }
    }
}
