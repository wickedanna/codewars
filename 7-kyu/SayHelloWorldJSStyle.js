/*

Prompt:

Write the definition of the function "say" such that calling this:

say("Hello")("World")
returns "Hello World"

*/

const say = (string1,) => function (str2) { return `${string1} ${str2}` };
