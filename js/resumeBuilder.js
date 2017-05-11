/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = "ray";
var awesomeThoughts = "I am ray and I am AWESOME!";
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
$("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");
$("#header").prepend(formattedName);
$("#header").append(formattedRole);
