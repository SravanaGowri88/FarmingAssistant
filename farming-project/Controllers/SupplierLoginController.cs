using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Web.Http;
using farming_project.Models;

namespace farming_project.Controllers
{
    [RoutePrefix("api/Supplier")]
    public class SupplierLoginController : ApiController
    {
        SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString);
        SqlCommand cmd = null;
        SqlDataAdapter da = null;
        [HttpPost]
        [Route("SupplierRegistration")]
        public string Supplier_Registration(SupplierLogin supplier)
        {
            string msg = string.Empty;
            try
            {
                cmd = new SqlCommand("sp_supplier_registration", conn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Supplier_Name", supplier.Supplier_Name);
                cmd.Parameters.AddWithValue("@MobileNo", supplier.MobileNo);
                cmd.Parameters.AddWithValue("@Address", supplier.Address);
                cmd.Parameters.AddWithValue("@Password", supplier.Password);
                conn.Open();
                int i = cmd.ExecuteNonQuery();
                conn.Close();
                if (i > 0)
                {
                    msg = "Registered Successfully";
                }
                else
                {
                    msg = "Error.";
                }
            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }
            return msg;
        }

        [HttpPost]
        [Route("SupplierLogin")]
        public string Supplier_Login(SupplierLogin supplier)
        {
            string msg = string.Empty;
            try
            {
                da = new SqlDataAdapter("sp_supplier_login", conn);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@Supplier_Name", supplier.Supplier_Name);
                da.SelectCommand.Parameters.AddWithValue("@Password", supplier.Password);
                DataTable dt = new DataTable();
                da.Fill(dt);
                if (dt.Rows.Count > 0)
                {
                    msg = "Login Successful...!!";
                    
                }
                else
                {
                    msg = "Login Failed..!!!";
                }
            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }
            return msg;
        }
    //    private string GenerateToken(int userId)
    //    {
    //        // define secret key used for signing the token
    //        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("your secret key goes here"));

    //        // define the signing credentials using the key and algorithm
    //        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

    //        // create a list of claims for the token
    //        var claims = new List<Claim>
    //{
    //    new Claim(ClaimTypes.NameIdentifier, userId.ToString())
    //};

    //        // create the token with the given claims and signing credentials
    //        var token = new JwtSecurityToken(
    //            issuer: "your app's name",
    //            audience: "your app's users",
    //            claims: claims,
    //            expires: DateTime.Now.AddDays(1),
    //            signingCredentials: creds
    //        );

    //        // return the generated token as a string
    //        return new JwtSecurityTokenHandler().WriteToken(token);
    //    }

    }
}


            

