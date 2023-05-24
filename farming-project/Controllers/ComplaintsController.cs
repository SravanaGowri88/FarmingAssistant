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
    public class ComplaintsController : ApiController
    {
        string connectionString = ConfigurationManager.ConnectionStrings["conn"].ConnectionString;
       
  
        public IEnumerable<Complaint> GetComplaints()
        {
            List<Complaint> complaints = new List<Complaint>();

            try
            {
                // Open a database connection using the SqlConnection object
                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    conn.Open();

                    // Define an SQL query to select all complaints from the Complaints table
                    string query = "SELECT * FROM Complaints";

                    // Create a SqlCommand object to execute the SQL query
                    using (SqlCommand cmd = new SqlCommand(query, conn))
                    {
                        // Execute the SQL query and get the result set
                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            // Parse the result set and add each complaint to the list
                            while (reader.Read())
                            {
                                Complaint complaint = new Complaint
                                {
                                   CompId=reader.GetInt32(0),
                                    Compdesp = reader.GetString(1),
                                    Status = reader.GetString(2)
                                };
                                complaints.Add(complaint);
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                // Handle any errors that occur during database interaction
                // (e.g., log the error or return an appropriate HTTP status code)
                throw ex;
            }

            // Return the list of complaints to the client
            return complaints;
        }
    
       
        public HttpResponseMessage Post([FromBody] Complaint complaint)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                using (SqlCommand cmd = new SqlCommand("INSERT INTO Complaints (Compdesp, Status) VALUES (@Compdesp,@Status)", connection))
                {
                    cmd.Parameters.AddWithValue("@Compdesp", complaint.Compdesp);
                    cmd.Parameters.AddWithValue("@Status", complaint.Status);
                   
                    int rowsAffected = cmd.ExecuteNonQuery();
                    if (rowsAffected > 0)
                    {
                        return Request.CreateResponse(HttpStatusCode.Created, complaint);
                    }
                    else
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Sell Crop not created");
                    }
                }
            }
        }
        public string Delete(int id)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @"delete from Complaints where CompId =" + id;
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


        //        [HttpPut]
        //        public string Put(Complaint cpt)
        //        {
        //            try
        //            {
        //                using (SqlConnection conn = new SqlConnection(connectionString))
        //                {
        //                    conn.Open();
        //                    DataTable table = new DataTable();
        //                    string query = @"update Complaints set Complaint_Desp='" + cpt.Complaint_Desp + @"',
        //Complaint_Status='" + cpt.Complaint_Status + @"',
        //where Complaint_Id=" + cpt.Complaint_Id + @"
        //";


        //                    using (var cmd = new SqlCommand(query, conn))
        //                    using (var da = new SqlDataAdapter(cmd))
        //                    {
        //                        cmd.CommandType = CommandType.Text;
        //                        da.Fill(table);
        //                    }
        //                    return "Updated Successfully";
        //                }
        //            }
        //            catch (Exception)
        //            {
        //                return "Failed to Update";
        //            }
        //        }

        [HttpPut]
        public HttpResponseMessage Put(Complaint cpt)
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    conn.Open();
                    string query = @"UPDATE Complaints SET Compdesp=@Compdesp, Status=@Status WHERE CompId=@CompId";

                    using (SqlCommand cmd = new SqlCommand(query, conn))
                    {
                        cmd.Parameters.AddWithValue("@Compdesp", cpt.Compdesp);
                        cmd.Parameters.AddWithValue("@Status", cpt.Status);
                        cmd.Parameters.AddWithValue("@CompId", cpt.CompId);

                        int rowsAffected = cmd.ExecuteNonQuery();
                        if (rowsAffected > 0)
                        {
                            return Request.CreateResponse(HttpStatusCode.OK, cpt);
                        }
                        else
                        {
                            return Request.CreateErrorResponse(HttpStatusCode.NotFound, $"Complaint with ID {cpt.CompId} not found");
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                // Handle any errors that occur during database interaction
                // (e.g., log the error or return an appropriate HTTP status code)
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }



    }

}
