/* Task 1 */

var heading = document.getElementById('heading')
console.log(heading.innerText)
heading.innerText= "This is new"


/* Task 2 using plain JavaScript */
//Task 2a
var textBtn = document.getElementById('addText1')
textBtn.addEventListener('click', function(event){
    var task2 = document.getElementById('task2a')
    var paragraph = document.createElement('p')
    paragraph.innerText = "Hello World"
    task2.appendChild(paragraph)
})

//Task 2b
function changeBGColor(event){
    //console.log(event.target.innerText)
    var body = document.getElementsByTagName('body')[0]
    body.style.backgroundColor = event.target.innerText.toLowerCase()
}

// Task 2c
function redirectToGoogle(event){
    window.location.assign("http//www.google.com")
}


/* Task 4 using jQuery */
