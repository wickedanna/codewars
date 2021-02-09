/*
Description:
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
Examples:
hello "john"   => "Hello, John!"
hello "aliCE"  => "Hello, Alice!"
hello          => "Hello, World!" # name not given
hello ''       => "Hello, World!" # name is an empty String
*/

function hello(name) {
  return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"}!`
}

/*
Notes:
- My original solution was a little more complicated than the above solution, but not terribly so
- My original solution was an if statement rather than a ternary operator, which worked just fine
- The most difficult part to solve was the capitalization - I was trying to make everything lowercase first and then get the first letter capitalized
- The above solution is one I found online
*/