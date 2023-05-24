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


namespace farming_project.Controllers
{
 
    public class SellcropsController : ApiController
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
            public HttpResponseMessage Post([FromBody] SellCrop sellCrop)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                using (SqlCommand cmd = new SqlCommand("INSERT INTO SellCrop (Name, CropName, Quantity, Rupees,Status) VALUES ( @Name, @CropName, @Quantity, @Rupees,@Status)", connection))
                {
                    
                    cmd.Parameters.AddWithValue("@Name", sellCrop.Name);
                    cmd.Parameters.AddWithValue("@CropName", sellCrop.CropName);
                    cmd.Parameters.AddWithValue("@Quantity", sellCrop.Quantity);
                    cmd.Parameters.AddWithValue("@Rupees", sellCrop.Rupees);
                   
                    cmd.Parameters.AddWithValue("@Status", 0);

                    int rowsAffected = cmd.ExecuteNonQuery();
                    if (rowsAffected > 0)
                    {
                        return Request.CreateResponse(HttpStatusCode.Created, sellCrop);
                    }
                    else
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Sell Crop not created");
                    }
                }
            }
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
        public string Delete(int id)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @"delete from SellCrop where CropId=" + id;
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










        public IHttpActionResult DeleteSellCrop(int id, int farmerId)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                SqlCommand command = new SqlCommand("DELETE FROM Sell_Crop WHERE CropId = @CropId AND ID = @ID", connection);

                command.Parameters.AddWithValue("@CropId", id);
                command.Parameters.AddWithValue("@ID", farmerId);

                int result = command.ExecuteNonQuery();

                if (result == 0)
                {
                    return NotFound();
                }

                return Ok();
            }
        }

       



    }
}
