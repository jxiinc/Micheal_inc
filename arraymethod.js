const fruits =["mango","apple","orange","banana",]
console.log(fruits)

fruits.push("berry");
console.log(fruits)
fruits.unshift("coconuts", "pineapple");
console.log(fruits)
fruits.pop();
console.log(fruits)
fruits.pop();
 console.log(fruits)
 fruits.shift();
 console.log(fruits)





 fruits.splice(2,1);
 console.log(fruits)

 fruits.splice(1,0,"cashew","grape")

 console.log(fruits)






 const colors=["brown","black","purple","grey","orange"]
 console.log(colors)

 colors.splice(1,2)
 console.log(colors)

 colors.splice(3,0, "red")
 console.log(colors)

 let numbers=[1 ,2,3,4,5,6,7,8,9]
 let doubleNumbers=numbers.map(number=>number*2);
 console.log(doubleNumbers)


 let number=[2,4,6,8,12,14]
 let additionNumbers=number.map(number=>number+2);
 console.log(additionNumbers)
 