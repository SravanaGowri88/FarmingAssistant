using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace farming_project.Models
{
    public class Crop_Recieved
    {
        public int Rec_Id { get; set; }
        public int CropId { get; set; }
 
        public int ID { get; set; }
        public string Name { get; set; }
        public string CropName { get; set; }
        public int Quantity { get; set; }
        public int Rupees { get; set; }
        public bool Status { get; set; }
    }

}