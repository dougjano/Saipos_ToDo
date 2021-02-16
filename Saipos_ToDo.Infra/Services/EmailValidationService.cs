using Saipos_ToDo.Crosscutting.Settings;
using Saipos_ToDo.Domain.Mailbox;
using Saipos_ToDo.Domain.PanelAggregate;
using Saipos_ToDo.Domain.Request;
using Saipos_ToDo.Domain.Rules;
using System;
using System.Collections.Generic;

namespace Saipos_ToDo.Infra.Services
{
    public class EmailValidationService
    {
        public void ValidateEmail(Task task)
        {
            var globalOptions = new GlobalOptions();
            var parameters = new RequestParameters()
            {
                Url = globalOptions.Mailbox_Url,
                Parameters = new List<Tuple<string, string>>()
                {
                    new Tuple<string, string>("access_key", globalOptions.Mailbox_Key),
                    new Tuple<string, string>("email", task.Owner.Email)
                }
            };

            var emailValidations = new ApiCallbackService().GetResponse<EmailValidations>(parameters);

            if (!emailValidations.format_valid)
            {
                throw new BusinessRuleException(string.Format(globalOptions.Error_Format_Email, emailValidations.did_you_mean));
            }
        }
    }
}
