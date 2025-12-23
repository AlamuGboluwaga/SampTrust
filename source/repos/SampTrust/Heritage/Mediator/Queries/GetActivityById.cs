using Heritage.Data;
using Heritage.Model;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Heritage.Mediator.Queries
{
    public class GetActivityById
    {
        public class Query:IRequest<Activity> {
        public required string Id { get; set; }  
        }
        public class Handler(AppDbContext context) : IRequestHandler<Query, Activity>
        {

            public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
            {
                if (request == null) throw new Exception("Request can not be empty");

                var activity = await context.Activities.FindAsync([request.Id], cancellationToken);
        

                if (activity == null) throw new Exception("Activity Not Found");

                return activity;
            }
        }
    }
}
