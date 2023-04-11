//Write a function that takes in a string and returns it when reversed
//let food = “eating”

/*let food = "eating"
function reversed(food){
    reverseFormat = food.reverse();
    console.log(reverseFormat);
}
reversed(food)*/

//Write a function that takes in the following array and consoles the target if it is found else
//null
let num = [2,8,0,23,5,45,76]
Target = 23
function mergeSorting(num){
    let middle = num.length/2
    let left = num.slice[0,middle]
    let right = num.slice[middle]

   // if()

}

//Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
let years = [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 
    2011, 2012, 2013, 2014, 2015,2016, 2017, 2018, 2019, 2020, 2021,2022]
for(let i = 0; i<years.length; i++){
    if(years[i]% 4 ===0){
        console.log(years[i] +" is a leap year");
    }
    console.log(years[i] +" is not a leap year");
}

//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
let nums = [1, 2, 3, 4, 5,6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,21,22,23,24,100]

for(num of nums){
    if(num%3 ===0 && num%5 ===0){
        console.log("FizzBuzz");

    }
    else if(num%3 === 0){
        console.log("Fizz");
    }
    else if(num%5===0){
        console.log("Buzz");
    }
    else{console.log(num)};
}


//Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
let numArray = [12,87,45,75,23,64,73]
function multiplied(numArray){
    for (let i=0; i<numArray.length; i++){
        console.log(numArray[i]*4);
    }
}
multiplied(numArray)

console.log("QUestion6");
//Write a function that takes in an array of strings and returns an array with every element
//turned into a number
//let strings = [“10”, ”24”,”45”,”56”,”67”]
let numbers = ["10", "24", "45", "56", "67" ]
function toNumbers(numbers){
    for (let i =0; i<numbers.length; i++){
        //console.log(numbers[i]:Number);
        console.log(numbers[i]);
    }
}
toNumbers(numbers)

