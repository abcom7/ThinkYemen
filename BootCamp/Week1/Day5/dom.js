function clicked(){
    var myDiv = document.getElementById('myDiv')
    // myDiv.innerHTML = '<h1>CUMA NAZAMI ZAMANI GELDI</h1>'
    var myInput = document.getElementById('textField')
    var myColor= document.getElementById('favColor')
    myDiv.innerHTML = myInput.value
    myDiv.style.color = myColor.value
}
