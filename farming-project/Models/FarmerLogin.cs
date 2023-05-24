using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

using System.Linq;
using System.Web;

namespace farming_project.Models
{
    public class FarmerLogin
    {
        [Key]
        public int  ID { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        [DataType(DataType.PhoneNumber)]
        public string PhoneNo { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        [DataType(DataType.PhoneNumber)]
        public string Password { get; set; }

    }
}