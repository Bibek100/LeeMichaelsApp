using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyApp.Api.Dto
{
    public class ItemRequestDto
    {
        public int Id { get; set; }
        public string Material { get; set; }
        public string Size { get; set; }
        public string User_FullName { get; set; }
        public string InitialFirst { get; set; }
        public string InitialSecond { get; set; }
        public string InitialThird { get; set; }

    }
}
