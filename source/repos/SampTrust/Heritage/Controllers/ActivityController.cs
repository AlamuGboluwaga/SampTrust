using Heritage.Data;
using Heritage.Data.Mediatr;
using Heritage.Model;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Heritage.Controllers
{
    public class ActivityController(AppDbContext context, IMediator mediator) : BaseController
    {
        private readonly AppDbContext dbData = context;
        [HttpGet("GetAllActivities")]
        public async Task<ActionResult<List<Activity>>> GetAllActivities()
        {
            try
            {

                return await mediator.Send(new GetActivityList.Query()); 
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("CreateActivity")]
        public async Task<ActionResult<List<Activity>>> CreateActivity([FromBody] Activity data)
        {
            try
            {
                if (data == null) return BadRequest();

                dbData.Activities.Add(data);

                await dbData.SaveChangesAsync();
                return Ok(new { staus = 200, message = "User successfully Created" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Internal server error", error = ex.Message });
            }
            return null;
        }

        [HttpPost("GetByActivityId/{id}")]
        public async Task<ActionResult<List<Activity>>> GetActivityById(string id)
        {
            if (id == null) return BadRequest();
            var activity =await dbData.Activities.FirstOrDefaultAsync(x => x.Id == id);
            if (activity == null) return NotFound();

            return Ok(activity);
        }

        [HttpPut("UpdateActivityById/{id}")]
        public async Task<ActionResult<List<Activity>>> UpdateActivityById([FromForm] Activity request ,string id)
        {
            if(id == null) return BadRequest();
            var activity = await dbData.Activities.FirstOrDefaultAsync(y => y.Id == id);
            if (activity == null) return NotFound();

            activity.Title = request.Title;
            activity.Description = request.Description;
            activity.Category = request.Category;
            activity.IsCancelled = request.IsCancelled;
            activity.City = request.City;
            activity.Venue = request.Venue;
         
            await dbData.SaveChangesAsync();

            return Ok(new {message ="Activity successfully updated"});
            

        }


        [HttpDelete("DeleteActivityById/{id}")]
        public async Task<ActionResult<List<Activity>>> DeleteActivityById(string id)
        {
            if(id == null) return BadRequest();
            var activity = await dbData.Activities.FirstOrDefaultAsync(x=>x.Id==id);
            if(activity == null) return NotFound(); 
             dbData.Activities.Remove(activity);
            await dbData.SaveChangesAsync();
            return Ok(new {message = "Activity successfully deleted"});
        }

    }
}
