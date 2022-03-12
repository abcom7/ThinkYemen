
function clicked()
{
    var myDiv = document.getElementById('mydiv')
    var myInput = document.getElementById('textField')
    var myColor = document.getElementById('favColor')
    myDiv.innerHTML = myInput.value
    myDiv.style.color = myColor.value
}