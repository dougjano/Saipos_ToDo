using Saipos_ToDo.Domain.Request;

namespace Saipos_ToDo.Domain.Mailbox
{
    public class EmailValidations : BaseRequest
    {
        public string email { get; set; }
        public string did_you_mean { get; set; }
        public string user { get; set; }
        public string domain { get; set; }
        public bool format_valid { get; set; }
        public bool mx_found { get; set; }
        public bool smtp_check { get; set; }
        public object catch_all { get; set; }
        public bool role { get; set; }
        public bool disposable { get; set; }
        public bool free { get; set; }
        public float score { get; set; }
    }
}
