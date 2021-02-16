using Saipos_ToDo.Domain.Request;
using System.Collections.Generic;

namespace Saipos_ToDo.Domain.Interfaces
{
    public interface IApiRequest
    {
        T GetResponse<T>(RequestParameters parameters) where T : BaseRequest;
        IEnumerable<T> GetResponseList<T>(RequestParameters parameters) where T : BaseRequest;
    }
}
