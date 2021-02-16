using Saipos_ToDo.Domain.Request;
using System;

namespace Saipos_ToDo.Domain.CatFacts
{
    public class CatFact : BaseRequest
    {
        public CatStatus status { get; set; }
        public string type { get; set; }
        public bool deleted { get; set; }
        public string _id { get; set; }
        public string user { get; set; }
        public string text { get; set; }
        public int __v { get; set; }
        public string source { get; set; }
        public DateTime updatedAt { get; set; }
        public string createdAt { get; set; }
        public bool used { get; set; }
    }
}
