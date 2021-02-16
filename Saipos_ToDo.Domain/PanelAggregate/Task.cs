using Saipos_ToDo.Crosscutting.Settings;
using Saipos_ToDo.Domain.Rules;
using System;

namespace Saipos_ToDo.Domain.PanelAggregate
{
    [Serializable]
    public class Task
    {
        public Task()
        {

        }

        public Task(string description)
        {
            ConvertIntoIdleTask(description);
        }

        public Task(string title, string description, User owner)
        {
            Title = title;
            Description = description;
            Owner = owner;
        }

        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public bool IsTaskDone { get; set; }

        public User Owner { get; set; }

        public int OwnerId { get; set; }

        public int ChangeCount { get; set; }

        public void FinishTask()
        {
            IsTaskDone = true;
        }

        public void UnfinishTask()
        {
            if (ChangeCount >= new GlobalOptions().Value_Task_Undo_Limit)
                throw new BusinessRuleException(new GlobalOptions().Error_Task_Undo_Limit);

            ChangeCount += 1;
            IsTaskDone = false;
        }

        public void ConvertIntoIdleTask(string description)
        {
            var globalOptions = new GlobalOptions();

            Title = globalOptions.Idle_Task_Title;
            Description = description;

            Owner = new User(globalOptions.Idle_Task_User, globalOptions.Idle_Task_Email);
        }
    }
}
