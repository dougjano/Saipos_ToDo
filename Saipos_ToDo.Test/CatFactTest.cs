using Saipos_ToDo.Crosscutting.Settings;
using Saipos_ToDo.Domain.CatFacts;
using Saipos_ToDo.Domain.Request;
using Saipos_ToDo.Infra.Services;
using Xunit;

namespace Saipos_ToDo.Test
{
    public class CatFactTest
    {

        [Fact]
        public void IsServiceReturningCatFacts_ShouldPass()
        {
            var parameters = new RequestParameters()
            {
                Url = new GlobalOptions().CatFact_Url
            };

            var catFactList = new ApiCallbackService().GetResponseList<CatFact>(parameters);

            Assert.NotNull(catFactList);
            Assert.NotEmpty(catFactList);
        }
    }
}
