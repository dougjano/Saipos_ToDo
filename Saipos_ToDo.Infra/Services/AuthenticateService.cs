using Saipos_ToDo.Crosscutting.Settings;
using Saipos_ToDo.Domain.Rules;
using TwoWayCryptography;

namespace Saipos_ToDo.Infra.Services
{
    public class AuthenticateService
    {
        public void ValidateUser(string password)
        {
            var globalOptions = new GlobalOptions();
            TwoWayCrypto crypt = new TwoWayCrypto(globalOptions.Auth_Hash);
            if (crypt.Dencrypt(globalOptions.Auth_Key) != password)
            {
                throw new BusinessRuleException(globalOptions.Auth_Error_Message);
            }
        }
    }
}
