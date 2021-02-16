using System;

namespace Saipos_ToDo.Domain.Rules
{
    public class BusinessRuleException : Exception
    {
        public BusinessRuleException(string message) : base(message) { }
    }
}
