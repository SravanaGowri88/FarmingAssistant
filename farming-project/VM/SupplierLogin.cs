using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace farming_project.VM
{
    public class SupplierLogin
    {
        [Key]
        public int Supplier_Id { get; set; }
        [Required]
        
        public string Supplier_Name { get; set; }
        [DataType(DataType.PhoneNumber)]
        public string MobileNo { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string Password { get; set; }


    }
}