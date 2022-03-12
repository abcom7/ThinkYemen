/*
array
push
pop
method or function
input --> method --> output
array
array.pop()
array.push()
array.sort()
Object 
*/


console.log("Morningday5:");
console.log("------------");

var year1 = 2021
year2 = 2022
year3 = 2023
workingyears = [year1, year2, year3]
//how to write object:

var me = {
    name: 'Ali',
    surname: 'Binmahfodh',
    age: 45,
    address: 'Istanbul'
}
var movies = [
    {
        title: 'Star Wars',
        actor: 'Ali'
    },
    {
        title: 'Matrix',
        actor: 'Ibrahim'
    }
]
//movies[0].actor
// for(var i = 0; i <= 10; i++){
//     //statments
//     console.log(i);
// }
//shift+alt+F to format the code 

for (var i = 0; i < movies.length; i++) {
    //statments
    console.log(movies[i].title);
}

var j = 0
while (j < movies.length) {
    console.log(movies[j].title)
    j++
}
