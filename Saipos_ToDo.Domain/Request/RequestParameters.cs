using System;
using System.Collections.Generic;

namespace Saipos_ToDo.Domain.Request
{
    public class RequestParameters
    {
        public string Url { get; set; }

        public IEnumerable<Tuple<string, string>> Parameters { get; set; }
    }
}
