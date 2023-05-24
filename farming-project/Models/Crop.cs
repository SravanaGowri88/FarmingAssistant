using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using farming_project.VM;

namespace farming_project.VM
{
    public class Crop
    {
        [Key]
        public int Crop_ID { get; set; }
        [Required]
        public int Crop_Name { get; set; }
    }
}