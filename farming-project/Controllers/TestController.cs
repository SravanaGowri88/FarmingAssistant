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
using farming_project.Models;


namespace farming_project.Controllers
{
    [RoutePrefix("api/Test")]
    public class TestController : ApiController
    {

        SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString);
        SqlCommand cmd = null;
        SqlDataAdapter da = null;
        [HttpPost]
        [Route("Registration")]
        public string Registration(FarmerLogin farmer)
        {
            string msg = string.Empty;
            try
            {
                using (var cmd = new SqlCommand("usp_Registration", conn))
                {
                    if (farmer == null)
                    {
                        throw new Exception("Farmer is null");
                    }

                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Name", farmer.Name);
                    cmd.Parameters.AddWithValue("@PhoneNo", farmer.PhoneNo);
                    cmd.Parameters.AddWithValue("@Address", farmer.Address);
                    cmd.Parameters.AddWithValue("@Password", farmer.Password);
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
            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }
            return msg;
        }

        [HttpPost]
        [Route("Login")]
        public string Login(FarmerLogin farmer)
        {
            string msg = string.Empty;
            try
            {
                da = new SqlDataAdapter("usp_Login", conn);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@PhoneNo", farmer.PhoneNo);
                da.SelectCommand.Parameters.AddWithValue("@Password", farmer.Password);
                DataTable dt = new DataTable();
                da.Fill(dt);
                if (dt.Rows.Count > 0)
                {
                    msg = "Login Successful...!!!";
                }
                else
                {
                    msg = "Login unsuccessful...!!!";
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

//using System;
//using System.Configuration;
//using System.Data;
//using System.Data.SqlClient;
//using System.Linq;
//using System.Net;
//using System.Net.Http;
//using System.Threading.Tasks;
//using farming_project.Models;
////using System.Web.Mvc; // For RoutePrefix, HttpPost, ModelSate, etc.
//using System.ComponentModel.DataAnnotations;
//using System.Web.Http.Cors;
//using Microsoft.AspNet.Identity;
//using System.Web.Http.ModelBinding;
//using System.Web.Http;
//using farming_project.Models;
//using System.Web;
////using Microsoft.AspNet.WebApi.Core;
//using Microsoft.AspNet.Identity.EntityFramework;
//using Microsoft.AspNet.Identity.Owin;
//using Microsoft.Owin;
//using Microsoft.Owin.Security;
//using Microsoft.Owin.Security.OAuth;
//using Microsoft.Owin.Host.SystemWeb;
//using Microsoft.Owin.Security.Cookies;
//using Owin;
////using Microsoft.AspNetCore.Http;

//namespace farming_project.Controllers
//{
//    [RoutePrefix("api/Test")]
//    public class TestController : ApiController
//    {
//        private readonly ApplicationDbContext _dbContext;
//        private readonly UserManager<FarmerLogin> _userManager;

//        public TestController()
//        {
//            _dbContext = new ApplicationDbContext();
//            _userManager = new UserManager<FarmerLogin>(new UserStore<FarmerLogin>(_dbContext));
//        }

//        [HttpPost]
//        [Route("Register")]
//        public async Task<IHttpActionResult> Register(FarmerLogin model)
//        {
//            if (!ModelState.IsValid)
//            {
//                return BadRequest(ModelState);
//            }

//            var user = new FarmerLogin
//            {
//                UserName = model.PhoneNo,
//                PhoneNumber = model.PhoneNo,
//                Address = model.Address
//            };

//            var result = await _userManager.CreateAsync(user, model.Password);

//            if (!result.Succeeded)
//            {
//                return GetErrorResult(result);
//            }

//            return Ok("Registered Successfully");
//        }

//        [HttpPost]
//        [AllowAnonymous]
//        [Route("Login")]
//        public async Task<IHttpActionResult> Login(FarmerLogin model)
//        {
//            if (!ModelState.IsValid)
//            {
//                return BadRequest(ModelState);
//            }

//            var user = await _userManager.FindAsync(model.PhoneNo, model.Password);

//            if (user == null)
//            {
//                ModelState.AddModelError("", "Invalid phone number or password.");
//                return BadRequest(ModelState);
//            }

//            var identity = await _userManager.CreateIdentityAsync(user, DefaultAuthenticationTypes.ApplicationCookie);

//            AuthenticationManager.SignOut(CookieAuthenticationDefaults.AuthenticationType);

//            AuthenticationManager.SignIn(new AuthenticationProperties
//            {
//                IsPersistent = false
//            }, identity);

//            return Ok("Login Successful...!!!");
//        }

//        public class MyController : ApiController
//        {
//            private IAuthenticationManager AuthenticationManager
//            {
//                get { return Request.GetOwinContext().Authentication; }
//            }

//            // ...
//        }

//        protected override void Dispose(bool disposing)
//        {
//            if (disposing)
//            {
//                _userManager.Dispose();
//                _dbContext.Dispose();
//            }

//            base.Dispose(disposing);
//        }

//        private IHttpActionResult GetErrorResult(IdentityResult result)
//        {
//            if (result == null)
//            {
//                return InternalServerError();
//            }

//            if (!result.Succeeded)
//            {
//                if (result.Errors != null)
//                {
//                    foreach (var error in result.Errors)
//                    {
//                        ModelState.AddModelError("", error);
//                    }
//                }

//                if (ModelState.IsValid)
//                {
//                    // No ModelState errors are available to send, so just return an empty BadRequest.
//                    return BadRequest();
//                }

//                return BadRequest(ModelState);
//            }

//            return null;
//        }
//    }
//}

