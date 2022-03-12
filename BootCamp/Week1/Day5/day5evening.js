/*

----------
arrow function new way to write javascript function ES6
            show current directory - show directory contents
in linux:   pwd                    - ls
in windows: echo %cd%              - dir
git
*/


console.log("Eveningday5:");
console.log("------------");

// var myAge = 45
// function ageAfterTwoYears(){
//     result = myAge + 2;
//     // console.log(result);    
// }
// ageAfterTwoYears()
// console.log('You are  ' + myAge+ ' years old now');
// console.log('You are  ' + result + ' years old after two years');


var grade = () => {
    var inputGrade = document.getElementById("grade-input").value;
    var finalgrade;
    var output = document.getElementById('yourgrade')
    var goodLuck=document.getElementById('gl')
    

if (inputGrade >= 90 && inputGrade<= 100){
    finalgrade=" \"A\" لقد حصلت على"
} 
else if(inputGrade >= 80 && inputGrade<= 89){
    finalgrade=" \"B\" لقد حصلت على"
}
else if(inputGrade >= 70 && inputGrade<= 79){
    finalgrade=" \"C\" لقد حصلت على"
}
else if(inputGrade >= 60 && inputGrade<= 69){
    finalgrade=" \"D\" لقد حصلت على"
}
else if(inputGrade < 60 ){
    finalgrade=" \"F\" لقد حصلت على"
}
else{
    alert("اكتب درجة من 0 الى 100")
}
if(true){
    output.innerHTML=goodLuck.value
}
output.innerHTML=finalgrade

}