using Saipos_ToDo.Crosscutting.Settings;
using Saipos_ToDo.Domain.Mailbox;
using Saipos_ToDo.Domain.Request;
using Saipos_ToDo.Infra.Services;
using System;
using System.Collections.Generic;
using Xunit;

namespace Saipos_ToDo.Test
{
    public class EmailValidationsTest
    {
        [Theory]
        [InlineData("dougjano@gmail.com")]
        [InlineData("dougjano@ig.com.br")]
        [InlineData("doug___jano@gmail.com")]
        public void IsEmailValidated_ShouldPass(string email)
        {
            var globalOptions = new GlobalOptions();
            var parameters = new RequestParameters()
            {
                Url = globalOptions.Mailbox_Url,
                Parameters = new List<Tuple<string, string>>()
                {
                    new Tuple<string, string>("access_key", globalOptions.Mailbox_Key),
                    new Tuple<string, string>("email", email)
                }
            };
            var emailValidations = new ApiCallbackService().GetResponse<EmailValidations>(parameters);

            Assert.NotNull(emailValidations);
            Assert.True(emailValidations.format_valid);
        }

        [Theory]
        [InlineData("aaSSDF test test")]
        public void IsNotEmailValidated_ShouldPass(string email)
        {
            var globalOptions = new GlobalOptions();
            var parameters = new RequestParameters()
            {
                Url = globalOptions.Mailbox_Url,
                Parameters = new List<Tuple<string, string>>()
                {
                    new Tuple<string, string>("access_key", globalOptions.Mailbox_Key),
                    new Tuple<string, string>("email", email)
                }
            };
            var emailValidations = new ApiCallbackService().GetResponse<EmailValidations>(parameters);

            Assert.NotNull(emailValidations);
            Assert.False(emailValidations.format_valid);
        }
    }
}
