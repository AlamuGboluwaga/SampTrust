using Heritage.Data;
using Heritage.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System;
using System.Collections.Immutable;




namespace Heritage.Controllers
{

    public class ActivityController(AppDbContext context) : BaseController
    {
        private readonly AppDbContext dbData = context;
        [HttpGet("GetAllActivities")]
        public async Task<ActionResult<List<Activity>>> GetAllActivities()
        {
            try
            {

                var result = await dbData.Activities.ToListAsync();

                return result == null ? NotFound() : Ok(result);
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
            return Ok(new {message = "Activity successfully delete"});
        }

    }
}
