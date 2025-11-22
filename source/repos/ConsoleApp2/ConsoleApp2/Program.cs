namespace ConsoleApp2
{
    internal class Program
    {
        static void Main(string[] args)
        {

            for (int i = 0; i < 100; i++) { 
            
            if(i<50)
                {
                    Console.WriteLine($"Student has failed with  scores = {i}");
                }
            else if(i >= 50 ){
                    Console.WriteLine($"Student passed with   scores = {i}");
                }
            
            }



            Console.ReadKey();
        }
    }
}
