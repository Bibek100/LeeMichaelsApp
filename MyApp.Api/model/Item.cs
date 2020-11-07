using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyApp.Api.model
{
    public class Item
    {
        public int Id { get; set; }
        public string Material { get; set; }
        public string Size { get; set; }
        public string User_FullName { get; set; }
        public string User_Initials { get; set; }
    }
}
