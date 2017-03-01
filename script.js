$(document).ready(function(){
 $("#studentButton").click(function(){
var Code2College_Students = ["Richard Cole Tomolac", "Abigail Peterson", "Spencer Michalke", "Garrett Michalke","Jorge Moreno","Thomas Cross","Basil Montemayor","Adrian Gamez Rodrigues","Kaci Childers","Rodrigo Martinez","Jerardo Sandoval","Elizabeth Garcia","Alexis Nalls"];
var random = Math.floor(Math.random()* Code2College_Students.length);
console.log(Code2College_Students[random]);
$("#studentDisplay").html(Code2College_Students[random]);

});

$("#teacherButton").click(function(){
var Code2College_Educators = ["Sam", "Samm", "Matt", "Trey"];
var rando = Math.floor(Math.random()* Code2College_Educators.length);
console.log(Code2College_Educators[rando]);
$("#teacherDisplay").html(Code2College_Educators[rando])
});
$("#newstudentButton").click(function(){
$("p").html($("input").val());

console.log($(input).val());
    
    

});

});