using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;


namespace farming_project.Models
{
    public class Advertisement
    {
      
        public int Ad_Id { get; set; }
       
        
        public string CropName { get; set; }
       
        public int Quantity { get; set; }

      
        public string Mobile { get; set; }
      
       
    }
}