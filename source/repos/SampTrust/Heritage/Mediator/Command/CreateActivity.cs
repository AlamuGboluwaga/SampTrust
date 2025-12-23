using Heritage.Data;
using Heritage.Model;
using MediatR;


namespace Heritage.Mediator.Command
{
    public class CreateActivity
    {
        public class Command :IRequest<string>{
            public required Activity Activity { get; set; }
    }
        public class Handler(AppDbContext context) : IRequestHandler<Command, string>
        {
            public async Task<string> Handle(Command request, CancellationToken cancellationToken)
            {
                if (request.Activity is null) throw new Exception("Bad request");
                context.Activities.Add(request.Activity);
                await context.SaveChangesAsync(cancellationToken);  
                return request.Activity.Id;
            }

        }


    }
}
