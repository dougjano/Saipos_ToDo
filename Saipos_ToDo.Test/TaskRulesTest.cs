using Saipos_ToDo.Crosscutting.Settings;
using Saipos_ToDo.Domain.PanelAggregate;
using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace Saipos_ToDo.Test
{
    public class TaskRulesTest
    {
        private string OwnerName = "Jano";
        private string OwnerEmail = "jano@gamil.com";

        [Theory]
        [InlineData("task001", "description001")]
        public void IsTaskThrowingLimitMessage_ShouldPass(string title, string description)
        {
            Panel panel;
            Exception exception = new Exception();

            panel = new Panel(new List<Task>() { new Task(title, description, new User(OwnerName, OwnerEmail)) });

            for (int i = 0; i < new GlobalOptions().Value_Task_Undo_Limit + 1; i += 1)
            {
                panel.Tasks.FirstOrDefault().FinishTask();
                exception = Record.Exception(() => panel.Tasks.FirstOrDefault().UnfinishTask());
            }

            Assert.Equal(new GlobalOptions().Error_Task_Undo_Limit, exception.Message);
        }
    }
}
