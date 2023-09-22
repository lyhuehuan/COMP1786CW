using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEnd.Models
{
    public class Observation
    {
        [Key]
        public int id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public DateTime Time { get; set; }
        public string Comment { get; set; }
        [Required]
        public int HikingId { get; set; }
        [ForeignKey("HikingId")]
        public Hiking Hiking { get; set;}
    }
}
