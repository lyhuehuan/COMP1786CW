using AutoMapper;
using BackEnd.Dtos.Hiking;
using BackEnd.Dtos.Observation;
using BackEnd.Models;

namespace BackEnd
{
    public class MappingConfig
    {
        public static MapperConfiguration RegisterMaps()
        {
            var mappingConfig = new MapperConfiguration(config =>
            {
                //hikingdto to hiking
                config.CreateMap<HikingUpsertDto, Hiking>().ReverseMap();
                // mapping observation
                config.CreateMap<ObservationUpsertDto, Observation>().ReverseMap();
            });
            return mappingConfig;
        }

    }
}
