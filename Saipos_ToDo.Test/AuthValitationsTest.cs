using Saipos_ToDo.Infra.Services;
using System;
using Xunit;

namespace Saipos_ToDo.Test
{
    public class AuthValidationsTest
    {
        [Theory]
        [InlineData("TrabalheNaSaipos")]
        public void IsPasswordRight_ShouldPass(string password)
        {
            Exception exception = new Exception();

            exception = Record.Exception(() => new AuthenticateService().ValidateUser(password));

            Assert.Null(exception);
        }

        [Theory]
        [InlineData("trabalhenasaipos")]
        public void IsPasswordRight_ShouldNotPass(string password)
        {
            Exception exception = new Exception();

            exception = Record.Exception(() => new AuthenticateService().ValidateUser(password));

            Assert.NotNull(exception);
        }
    }
}
