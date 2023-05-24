using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

using farming_project.Models;

namespace farming_project.Controllers
{
  
    public class AdvertisementController : ApiController
    {

        
        [HttpGet]
        public HttpResponseMessage Get()
        {
            DataTable table = new DataTable();
            string query = @"select * from Advertisement
                           ";
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }


      
        public string Post(Advertisement ad)
        {
            try
            {
               

                DataTable table = new DataTable();
                string query = @"insert into Advertisement(CropName,Quantity,Mobile) values('" + ad.CropName + @"','" + ad.Quantity + @"', '" + ad.Mobile + @"')";
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Successfully Posted";
            }
            catch (Exception)
            {
                return "Failed to Add";
            }
        }
      
   
        public string Put(Advertisement advertisements)
        {
            try
            {
                if (advertisements == null)
                {
                    return "Advertisement object is null";
                }
                DataTable table = new DataTable();
                string query = @"update Advertisement set CropName='" + advertisements.CropName + @"',
Quantity='" + advertisements.Quantity + @"',
Mobile='" + advertisements.Mobile + @"' 
where Ad_Id=" + advertisements.Ad_Id + @"
";

                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Updated Successfully";
            }
            catch (Exception)
            {
                return "Failed to Update";
            }
        }



        public string Delete(int id)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @"delete from Advertisement where Ad_Id=" + id;




                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Deletd Succesfully";
            }
            catch (Exception)
            {
                return "Failed to Delete";
            }




        }
    }
}
