using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace AngularJS_Basic_CRUD.Models
{
    public class BusinessLayer
    {
        DBLayer DB = new DBLayer();
        public DataTable Employee(EmployeeModal obj)
        {
            SqlParameter[] parameter = new SqlParameter[] {
                new SqlParameter("@Action",obj.Action),
                new SqlParameter("@ID",obj.ID),
                new SqlParameter("@Name",obj.Name),
                new SqlParameter("@Mobile",obj.Mobile),
                new SqlParameter("@PicUrl",obj.PicUrl),
                new SqlParameter("@StateId",obj.StateId),
                new SqlParameter("@CityId",obj.CityId),
                new SqlParameter("@EmpId",obj.EmpId),
                new SqlParameter("@Project",obj.Project),
            };
            DataTable dt = DB.SelectData("SP_Employee", parameter);
            return dt;
        }
    }
}