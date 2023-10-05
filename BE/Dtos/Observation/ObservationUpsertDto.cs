using System.ComponentModel.DataAnnotations;

namespace BackEnd.Dtos.Observation
{
    public class ObservationUpsertDto
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public DateTime Time { get; set; }
        [Required]
        public int HikingId { get; set; }
    }
}
