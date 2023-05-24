using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;


namespace farming_project.Models
{
    public class SellCrop
    {
        [Key]
        public int CropId { get; set; }
       
        public string Name { get; set; }
        [Required]
        public string CropName { get; set; }
        [Required]
        public int Quantity { get; set; }
        [Required]
        public int Rupees { get; set; }
       
        public string Status { get; set; }

        


    }
}