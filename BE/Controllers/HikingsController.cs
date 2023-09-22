using AutoMapper;
using BackEnd.Dtos.Hiking;
using BackEnd.Models;
using BackEnd.Services.IServices;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HikingsController : ControllerBase
    {
        private IHikingService _hikingService;
        private readonly IMapper _mapper;

        public HikingsController(IHikingService hikingService, IMapper mapper)
        {
            _hikingService = hikingService;
            _mapper = mapper;
        }

        [HttpGet]
        public IList<Hiking> GetAll()
        {
            return _hikingService.GetAll();
        }

        [HttpGet("{id:int}")]
        public IActionResult GetById([FromRoute]int id)
        {
            var hiking = _hikingService.GetById(id);
            return Ok(hiking);
        }

        [HttpDelete("{id:int}")]
        public IActionResult Delete(int id)
        {
            var result = _hikingService.Delete(id);
            if (!result)
            {
                return BadRequest();
            }

            return Ok();
        }

        [HttpGet("search/{keyword}")]
        public IActionResult Search(string keyword)
        {
            var result = _hikingService.Search(keyword);
            return Ok(result);
        }

        [HttpPost]
        public IActionResult Create(HikingUpsertDto input)
        {
            var hiking = _mapper.Map<Hiking>(input);
            _hikingService.Create(hiking);
            return Ok(hiking);
        }

        [HttpPut("{id:int}")]
        public IActionResult Update([FromRoute] int id, HikingUpsertDto input)
        {
            var hiking = _hikingService.GetById(id);
            _mapper.Map(input, hiking);
            _hikingService.Update(hiking);
            return Ok(hiking);
        }
    }
}
