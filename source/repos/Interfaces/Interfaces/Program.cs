namespace Interfaces
{
    internal class Program
    {
        /*
        Interfaces
        Another way to achieve abstraction in C#, is with interfaces.

        An interface is a completely "abstract class", which can only contain abstract methods and properties (with empty bodies):

        It is considered good practice to start with the letter "I" at the beginning of an interface, as it makes it easier for yourself and others to remember that it is an interface and not a class.

        By default, members of an interface are abstract and public.

        Note: Interfaces can contain properties and methods without bodies,but not fields/variables.

        To access the interface methods, the interface must be "implemented" (kind a like inherited) by another class. To implement an interface, use the : symbol (just like with inheritance). The body of the interface method is provided by the "implement" class. Note that you do not have to use the override keyword when implementing an interface:
         */
        /*
         Notes on Interfaces:
        Like abstract classes, interfaces cannot be used to create objects (in the example above, it is not possible to create an "IAnimal" object in the Program class)
        Interface methods do not have a body - the body is provided by the "implement" class
        On implementation of an interface, you must not override all of its methods
        Interfaces can contain properties and methods, but not fields/variables
        Interface members are by default abstract and public
        An interface cannot contain a constructor (as it cannot be used to create objects)
        Why And When To Use Interfaces?
        1) To achieve security - hide certain details and only show the important details of an object (interface).

        2) C# does not support "multiple inheritance" (a class can only inherit from one base class). However, it can be achieved with interfaces, because the class can implement multiple interfaces. Note: To implement multiple interfaces, separate them with a comma (see example in the next chapter).
         */
        static void Main(string[] args)
        {
            Action action = new Action();

            action.AnimalSound();
            action.Dogs();

            Console.ReadKey();
        }
    }

    public interface IAnimal
    {
        public string Name { get; set; } 
        void AnimalSound();
        void Dogs();

    }

    class Action : IAnimal
    {
        public void AnimalSound()
        {
            Console.WriteLine("Another way to achieve abstraction in C#, is with interfaces.\r\n\r\n    An interface is a completely \"abstract class\",");
            Console.WriteLine(" Note: Interfaces can contain properties and methods without bodies, but not fields/variables.");
            Console.WriteLine("Interfaces are started with Capital 'I' ");
            Console.WriteLine("Infaces has methods without bodies");
            Console.WriteLine("To access the methods of an Interface a new class is created to inherit the Methods");
            Console.WriteLine("Note Interfaces does not use override when called");
           
        }
         public void Dogs() {
            Console.WriteLine("Dogs do back");
         
        }

        public string Name { get; set; } = "Cat";  
    }
}
