using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using farming_project.VM;

namespace farming_project.Controllers
{
    [RoutePrefix("api/Admin")]
    public class AdminController : ApiController
    {
        SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString);
        SqlCommand cmd = null;
        SqlDataAdapter da = null;
        [HttpPost]
        [Route("AdminLogin")]
        public string Admin_Login(VM.AdminLogin admin)
        {
            string msg = string.Empty;
            try
            {
                da = new SqlDataAdapter("sp_Admin_Login", conn);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@Name", admin.Name);
                da.SelectCommand.Parameters.AddWithValue("@Password", admin.Password);
                DataTable dt = new DataTable();
                da.Fill(dt);
                if (dt.Rows.Count > 0)
                {
                    msg = "User is Valid";
                }
                else
                {
                    msg = "User is Invalid";
                }
            }

            catch (Exception ex)
            {
                msg = ex.Message;
            }
            return msg;
        }        
    }
}
