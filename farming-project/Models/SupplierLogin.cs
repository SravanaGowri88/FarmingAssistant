using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace farming_project.Models
{
    public class SupplierLogin
    {
        [Key]
        public int Supplier_Id{ get; set; }
        [Required]
        public string Supplier_Name { get; set; }
        [Required]
        [DataType(DataType.PhoneNumber)]
        public int MobileNo { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    

    }
}