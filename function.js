/*function
functions is a reusable block of code that performs a specific task and returnsan output
types 
function declaration
function expression
arrow function
function declaration*/
function add(a,b){
    return a+b;
}
const sum=add(1,2);
console.log(sum);

function muult(a,b){
    return a*b;
}
const equat=muult(5,4);
console.log(equat)





function sumofthree(a,b,c){
    return a+b+c;
}
const run= sumofthree(5,10,1);
console.log(run)

//function expression that returns the sum of three numbers

function addition(a,b,c){
    return a+b+c;
}
const result= addition(4,6,8);
console.log(result);

//arrow function


function multiply(a,b,c) {
    return a*b*c;
}
const results= multiply(5,3,2);
console.log(results)



function greet(name){
    console.log('hello'  +name+"  welcome to our application");
}
greet("micheal")
greet("john")


const name="micheal"
console.log("hello" + name);

const names="micheal abanigbo"
console.log('hello'+names+ "welcome to New horizon");



function info(name,course){
    console.log("i  am  " +name+" A "+course+"at  New  horizons ");
}
info("micheal","Full stack devloper")





function info3(name,course,school){
    console.log(" i am "+name+" A "+course+" studying  at "+school);
}
info3("micheal","full stack devloper","New Horzions")





//function expression


const greetings=function(name){
    console.log(" hello "+name)
}
 greetings("dave")
 

 const intro= function(name,course,school){
    console.log(" I  am "+name+ " A " +course+ " studying  at  " +school);
 }
 intro("Micheal", 'full stack','New Hozions')



 const additions=function(a,b,c){
    console.log(a+b+c)

 }

 additions(6,7,5)





 //arrow function

 const greet2= name => console.log(" hello " + name);





 const info1=( name,course,school) => 
console.log
 ("I  Am "+name+ " a " +course+ "  studying  at  " +school);

info1("micheal", "fullstack",  "New horizons")


const summation=(a,b,c)=>
    console.log(a+b+c);
summation(3,5,5)