
## Drawing a Shape
```C#
//C# set up will automatically have
//The file is called Program.cs


using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Giraffe 
{
    class Program
    {
        static void Main(string[] args)
        //The Main function is the code that the Program will execute
        {
            Console.WriteLine("Hello World!");
                 //To execute the code, press the Start Button in VS
            Console.ReadLine();
                 //This keeps the Console Window Up
                 
            Console.WriteLine("\      /");
            Console.WriteLine(" \    /");
            Console.WriteLine("  \  /");
            Console.WriteLine("   \/");
        }
     }
}
```
## Variables
```C#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Giraffe 
{
    class Program
    {
        static void Main(string[] args)
        {
            string characterName = "Aethur";
            int characterAge;
            characterAge = 19;
            Console.WriteLine(characterName + " is " + characterAge);
            characterName = "Kleptes";
            Console.WriteLine(characterName + " is " + characterAge);
        }
    }
}
```
