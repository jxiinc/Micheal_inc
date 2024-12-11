/*const btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
    alert("you just clicked a button");
})*/

const btn=document.getElementById('btn');
function changeText(){
    document.getElementById('text').innerHTML="welcome to DOM js class"
}
btn.addEventListener('click',()=>{
    changeText()
})


//this code reverse the text to the orginal

const btnreverse=document.getElementById('btnreverse');
function reverseText(){
    document.getElementById('text').innerHTML='hello Advanced JS'
}
btnreverse.addEventListener('click',()=>{
    reverseText()
})


//this code clears  the entire text
const btn1=document.getElementById('btn1');
function clearText(){
    document.getElementById('text').innerHTML=""
}
btn1.addEventListener('click',()=>{
clearText()
})