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
    public class FarminTipsController : ApiController
    {
        public HttpResponseMessage Get()
        {
            DataTable table = new DataTable();
            string query = @"select TipID,FarmingTip from Farming_Tips
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



        public string Post(Farming_Tips tips)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @"insert into Farming_Tips values('" + tips.FarmingTip + @"')
                           ";



                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Added Succesfully";
            }
            catch (Exception)
            {
                return "Failed to Add";
            }
        }



        public string Put(Farming_Tips tips)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @"update Farming_Tips set FarmingTip='" + tips.FarmingTip + @"'
                               where TipID=" + tips.TipID + @"
                               ";



                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Updated Succesfully";
            }
            catch (Exception ex)
            {
                return "Failed to Update. Error: " + ex.Message;
            }

        }
        public string Delete(int id)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @"delete from Farming_Tips where TipID=" + id;




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
