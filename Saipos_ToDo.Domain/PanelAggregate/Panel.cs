using System;
using System.Collections.Generic;

namespace Saipos_ToDo.Domain.PanelAggregate
{
    [Serializable]
    public class Panel
    {
        private readonly List<Task> _taskItems;
        public IReadOnlyCollection<Task> Tasks => _taskItems;

        public Panel(List<Task> taskItems)
        {
            _taskItems = taskItems;
        }
    }
}
