namespace ToStringMethod
{
    internal class Program
    {
        //ToString()
        // ToString method converts an object to it's string representation for suitable display
        static void Main(string[] args)
        {
            Car car = new Car("Toyota", "BigDaddy", "Red");

            Console.WriteLine(car);







            Console.ReadKey();
        }
    }
    class Car
    {
        string make;
        string model;
        string color;

        public Car(string make, string model, string color)
        {

            this.make = make;
            this.model = model;
            this.color = color;
        }
        public override string ToString()
        {
            return "This is a " + make +" " + model + " " + color +" "+ "color";
        }
    }

    
      

    
}
