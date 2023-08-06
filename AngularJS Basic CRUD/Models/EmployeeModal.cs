using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularJS_Basic_CRUD.Models
{
    public class EmployeeModal
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Mobile { get; set; }
        public string PicUrl { get; set; }
        public HttpPostedFileBase files { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string EntryDate { get; set; }
        public string Action { get; set; }
        public int StateId { get; set; }
        public int CityId { get; set; }
        public int EmpId { get; set; }
        public string Project { get; set; }
    }
}