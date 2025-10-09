namespace LINQ
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Without LINQ
        List<int> numbers = [1,2,3,4,5,6,7,8,9,0];

            //List<int> result = new List<int>();

            //foreach (var number in numbers)
            //{
            //    if (number >5)
            //    {
            //        result.Add(number);
            //    }  
            //}

            //foreach (var item in result)
            //{
            //    Console.WriteLine(item);  
            //}


            // With LINQ

            var result = from n in numbers
                         where n > 5
                         select n;
            //or

            var result1 = numbers.Where(n => n > 5);


            foreach (var item in result)
            {
                Console.WriteLine(item);   
            }




            Console.ReadKey();
        }
    }
}
