//"text"
let id = document.getElementById('text');
console.log(id.innerHTML);

//"Tag"
const h1Val = document.getElementsByTagName('h1');
console.log(h1Val[0].innerText);

//"Class"
let classStore = document.getElementsByClassName('box');
console.log(classStore[2].innerText);

//text change 'Hello' to "Hello World"
let text = document.querySelector('h4')
 text.addEventListener('click' , () =>(
    text.innerText = 'Hello World'
)
);

// text change 'Hello World' to 'Welcome to elevation academy' 
 function changeText(){
   let text = document.querySelector('h5')
   text.innerText = 'Welcome to elevation academy'
 };

// text change 'Hello World' to 'Welcome to elevation academy' with color
let change = document.querySelector('h2')
    change.addEventListener('click' ,function (){ 
    change.innerText = 'Welcome to elevation academy'
    change.style.color = "red"
})


 
//Cards
function direction() {
  let changeDimension = document.getElementsByClassName('parentCard');
  changeDimension[0].style.flexDirection = 'column'
}

//clock

function updateTime(){
  var dateTime = new Date();
  var hours = dateTime.getHours();
  var minutes = dateTime.getMinutes();
  var seconds = dateTime.getSeconds();
  var am_or_pm = document.getElementById("am-or-pm")

  if(hours>=12){
    am_or_pm.innerHTML = "PM";
  }else{
    am_or_pm.innerHTML = "AM";
  }
   

  if(hours > 12){
    hours = hours -12;
  }

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

}
setInterval(updateTime,1000);























// console.dir(document)

// //textcontent
//  console.log(document.all[10]);    
// document.all[10].textContent = 'Welcome to PrepBytes'
// const text = document.getElementById('text')
// text.textContent ='Welcome to PrepBytes'
// console.log(text);

// //innerHTML
// console.log(document.all[11]);
//  document.all[11].innerHTML = '<h3>Welcome to PrepBytes</h3>'
 



