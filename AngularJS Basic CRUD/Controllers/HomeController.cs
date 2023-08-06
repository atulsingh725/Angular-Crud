using AngularJS_Basic_CRUD.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularJS_Basic_CRUD.Controllers
{
    public class HomeController : Controller
    {
        BusinessLayer Buss = new BusinessLayer();

        BasicClasses cls = new BasicClasses();
        public ActionResult Index()
        {
            return View();
        }
        //public ActionResult SaveData(string name, string mobile)
        //{
        //    string msg = "";
        //    return Json(msg);
        //}

        public ActionResult SaveData(EmployeeModal obj)
        {
            string msg = "";
            if (obj.files != null)
            {
                var fileName = Path.GetFileName(obj.files.FileName);
                var path = Path.Combine(Server.MapPath("~/Content/Uploads"), fileName);
                obj.files.SaveAs(path);
                obj.PicUrl = fileName;
            }

            DataTable dt = Buss.Employee(obj);
            msg = dt.Rows[0][0].ToString();
            return Json(msg);
        }


        //public ActionResult SaveData(EmployeeModal obj)
        //{
        //    string msg = "";
        //    DataTable dt = Buss.Employee(obj);
        //    msg = dt.Rows[0][0].ToString();
        //    return Json(msg);
        //}

        public ActionResult BindState(EmployeeModal obj)
        {
            
            obj.Action = "BindState";
            DataTable dt = Buss.Employee(obj);

            List<EmployeeModal> list = new List<EmployeeModal>();
            foreach (DataRow data in dt.Rows)
            {
                EmployeeModal obj2 = new EmployeeModal();
                obj2.State = data["statename"].ToString();
                obj2.StateId = Convert.ToInt32(data["stateid"]);
                list.Add(obj2);
            }
            return Json(list, JsonRequestBehavior.AllowGet);
        }


        public ActionResult BindCity(EmployeeModal obj)
        {
            obj.Action = "BindCity";
            DataTable dt = Buss.Employee(obj);

            List<EmployeeModal> list = new List<EmployeeModal>();
            foreach (DataRow data in dt.Rows)
            {
                EmployeeModal obj2 = new EmployeeModal();
                obj2.City = data["cityname"].ToString();
                obj2.CityId = Convert.ToInt32(data["cityid"]);
                list.Add(obj2);
            }
            return Json(list, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetAllData(EmployeeModal obj)
        {
            obj.Action = "GetAllData";
            DataTable dt = Buss.Employee(obj);

            List<EmployeeModal> list = new List<EmployeeModal>();
            foreach (DataRow data in dt.Rows)
            {
                EmployeeModal obj2 = new EmployeeModal();
                obj2.Name = data["Name"].ToString();
                obj2.Mobile = data["Mobile"].ToString();
                obj2.State = data["State"].ToString();
                obj2.City = data["City"].ToString();
                obj2.EntryDate = data["EntryDate"].ToString();
                obj2.ID = Convert.ToInt32(data["ID"]);
                obj2.StateId = Convert.ToInt32(data["StateId"]);
                obj2.CityId = Convert.ToInt32(data["CityId"]);
                obj2.PicUrl = data["PicUrl"].ToString();
                list.Add(obj2);
            }
            return Json(list, JsonRequestBehavior.AllowGet);
        }

        public ActionResult DeleteData(EmployeeModal obj)
        {
            string msg = "";
            obj.Action = "Delete";
            DataTable dt = Buss.Employee(obj);
            msg = dt.Rows[0][0].ToString();
            return Json(msg);
        }

        public ActionResult AssignProject()
        {
            return View();
        }
        public ActionResult BindEmployee()
        {
            EmployeeModal obj = new EmployeeModal();
            obj.Action = "BindEmployee";
            DataTable dt = Buss.Employee(obj);
            List<EmployeeModal> EmpList= new List<EmployeeModal>();
            foreach(DataRow data in dt.Rows)
            {
                EmployeeModal emp = new EmployeeModal();
                emp.EmpId= Convert.ToInt32(data["EmpId"]);
                emp.Name = data["Name"].ToString();
                EmpList.Add(emp);
            }
            return Json(EmpList,JsonRequestBehavior.AllowGet);
        }

        public ActionResult SaveProject(EmployeeModal obj)
        {
            string msg = "";
            obj.Action = "AssignProject";
            DataTable dt = Buss.Employee(obj);
            msg = dt.Rows[0][0].ToString();
            return Json(msg);
        }

        public ActionResult GetAllProject()
        {
            EmployeeModal obj = new EmployeeModal();
            obj.Action = "getAllproject";
            DataTable dt = Buss.Employee(obj);
            List<EmployeeModal> ProjectList = new List<EmployeeModal>();
            foreach (DataRow data in dt.Rows)
            {
                EmployeeModal emp = new EmployeeModal();
                emp.ID = Convert.ToInt32(data["ID"]);
                emp.Name = data["Name"].ToString();
                emp.EntryDate = data["EntryDate"].ToString();
                emp.Project = data["Project"].ToString();
                emp.EmpId = Convert.ToInt32(data["EmpID"]);
                ProjectList.Add(emp);
            }
            return Json(ProjectList, JsonRequestBehavior.AllowGet);
        }

        public ActionResult DeleteProject(EmployeeModal obj)
        {
            string msg = "";
            obj.Action = "DeleteProject";
            DataTable dt = Buss.Employee(obj);
            msg = dt.Rows[0][0].ToString();
            return Json(msg);
        }

    }
}

