var year1 = 2021
var year2 = 2022
var year3 = 2023

var workingYears = [2021, 2022, 2023]

var me = {
    name: 'Feras',
    surname: 'Jobeir',
    age: 30,
    address: 'Istanbul'
}

var movies = [
    {
        title: 'Star Wars',
        actor: 'Feras'
    },
    {
        title: 'The god father',
        actor: 'Somaya'
    }
]

for (var i = 0; i < movies.length; i++) {
    console.log(movies[i].title)
}
console.log(i)

var j = 0
while (j < movies.length) {
    console.log(movies[j].title)
    j++
}
console.log(j)