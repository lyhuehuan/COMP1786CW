using System.ComponentModel.DataAnnotations;

namespace BackEnd.Dtos.Hiking
{
    public class HikingUpsertDto
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Location { get; set; }
        [Required]
        public DateTime Date { get; set; }
        [Required]
        public bool ParkingAvailable { get; set; }
        [Required]
        public int LengthOfHike { get; set; }
        [Required]
        public int DifficultLevel { get; set; }
        public string Description { get; set; }
    }
}
