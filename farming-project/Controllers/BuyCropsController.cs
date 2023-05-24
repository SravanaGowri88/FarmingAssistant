using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using farming_project.Models;
using Microsoft.AspNetCore.Mvc;

namespace farming_project.Controllers
{
   
    public class BuyCropsController : ApiController
    {
        string connectionString = ConfigurationManager.ConnectionStrings["conn"].ConnectionString;

        public HttpResponseMessage Get()
        {
            DataTable table = new DataTable();
            string query = @"select * from SellCrop
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
        public HttpResponseMessage Put(SellCrop sell)
        {
            try
            {
                if (sell == null)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Sell object is null");
                }
                string query = @"update SellCrop set Name='" + sell.Name + @"', CropName='" + sell.CropName + @"',
Quantity='" + sell.Quantity + @"',
Rupees='" + sell.Rupees + @"',
Status='" + sell.Status + @"' 
where CropId=" + sell.CropId + @"
";

                using (var con = new SqlConnection(connectionString))
                using (var cmd = new SqlCommand(query, con))
                {
                    cmd.CommandType = CommandType.Text;
                    con.Open();
                    int rowsAffected = cmd.ExecuteNonQuery();
                    if (rowsAffected > 0)
                    {
                        return Request.CreateResponse(HttpStatusCode.OK, "Updated Successfully");
                    }
                    else
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Sell Crop not found");
                    }
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "Failed to update Sell Crop", ex);
            }
        }


        //[HttpPost]
        //[Route("UpdateStatus")]
        //public HttpResponseMessage UpdateStatus(int recId, bool status)
        //{
        //    using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString))
        //    {
        //        string query = "UPDATE Crop_Recieved SET Status= @status WHERE Rec_Id = @recId";
        //        SqlCommand command = new SqlCommand(query, conn);
        //        command.Parameters.AddWithValue("@status", status);
        //        command.Parameters.AddWithValue("@recId", recId);
        //        conn.Open();
        //        int result = command.ExecuteNonQuery();
        //        if (result > 0)
        //        {
        //            return Request.CreateResponse(HttpStatusCode.OK, "Status updated successfully");
        //        }
        //        else
        //        {
        //            return Request.CreateErrorResponse(HttpStatusCode.NotFound, "No record found for the given Rec_Id");
        //        }
        //    }
        //}

       
    }
}


