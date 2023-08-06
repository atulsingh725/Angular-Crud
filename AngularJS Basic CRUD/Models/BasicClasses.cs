using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularJS_Basic_CRUD.Models
{
    public class BasicClasses
    {
        public static List<SelectListItem> BindDDL(DataTable dt, string select = null)
        {
            List<SelectListItem> lst = new List<SelectListItem>();
            try
            {


                if (dt != null && dt.Rows.Count > 0)
                {

                    lst.Add(new SelectListItem() { Text = "Select", Value = "0" });
                    foreach (DataRow item in dt.Rows)
                    {
                        if (!string.IsNullOrEmpty(select))
                        {
                            if (Convert.ToString(item[0]) == select)
                            {
                                lst.Add(new SelectListItem()
                                {
                                    Text = Convert.ToString(item[1]),
                                    Value = Convert.ToString(item[0]),
                                    Selected = true
                                });
                            }
                            else

                                lst.Add(new SelectListItem()
                                {
                                    Text = Convert.ToString(item[1]),
                                    Value = Convert.ToString(item[0])
                                });

                        }
                        else

                            lst.Add(new SelectListItem()
                            {
                                Text = Convert.ToString(item[1]),
                                Value = Convert.ToString(item[0])
                            });
                    }
                }
                else
                {
                    lst.Add(new SelectListItem() { Text = "--none--", Value = "" });
                }

            }
            catch (Exception ex)
            {


            }
            return lst;
        }
    }
}