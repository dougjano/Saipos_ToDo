using RestSharp;
using Saipos_ToDo.Domain.Interfaces;
using Saipos_ToDo.Domain.Request;
using System.Collections.Generic;

namespace Saipos_ToDo.Infra.Services
{
    public class ApiCallbackService : IApiRequest
    {
        public T GetResponse<T>(RequestParameters requestParameters) where T : BaseRequest
        {
            var client = new RestClient(requestParameters.Url);
            var request = new RestRequest(Method.GET);

            if (requestParameters.Parameters != null)
            {
                foreach (var parameter in requestParameters.Parameters)
                {
                    request.AddParameter(parameter.Item1, parameter.Item2);
                }
            }

            return client.Execute<T>(request).Data;
        }

        public IEnumerable<T> GetResponseList<T>(RequestParameters requestParameters) where T : BaseRequest
        {
            var client = new RestClient(requestParameters.Url);
            var request = new RestRequest(Method.GET);

            if (requestParameters.Parameters != null)
            {
                foreach (var parameter in requestParameters.Parameters)
                {
                    request.AddParameter(parameter.Item1, parameter.Item2);
                }
            }

            return client.Execute<IEnumerable<T>>(request).Data;
        }
    }
}
