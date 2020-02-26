using System.Collections.Generic;
using DVDMovie.Models;
using Microsoft.AspNetCore.Mvc;
using DVDMovie.Models.BindingTargets;

namespace DVDMovie.Controllers
{
    [Route("api/studios")]
    public class StudioController: Controller
    {
        public DataContext context;
        public StudioController(DataContext ctx) => (context) = (ctx);

        [HttpGet]
        public IEnumerable<Studio> GetStudios() => context.Studios;

        [HttpPost]
        public IActionResult CreateStudio([FromBody] StudioData sdata)
        {
            if(ModelState.IsValid)
            {
                Studio s = sdata.Studio;
                context.Add(s);
                context.SaveChanges();
                return Ok(s.StudioId);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public IActionResult ReplaceStudio (long id, [FromBody] StudioData sData)
        {
            if(ModelState.IsValid)
            {
                Studio s = sData.Studio;
                s.StudioId = id;
                context.Update(s);
                context.SaveChanges();
                return Ok(s.StudioId);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteStudio(long id)
        {
            context.Remove(new Studio { StudioId = id });
            context.SaveChanges();
            return Ok(id);
        }
    }
}