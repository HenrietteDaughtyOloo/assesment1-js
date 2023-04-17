            //The file with the corrections.//
            //QUESTION ONE *1 correct* 
//Write a function that takes in a string and returns it when reversed
//let food = “eating”

let food = "eating"
function reversed(food){
    return food.split("").reverse("").join("")
}
console.log(reversed(food));


            //QUESTION 2: CORRECT.//
//Write a function that takes in the following array and consoles the target if it is found else
//null
let num = mergeSorting([2,8,0,23,5,45,76])
let Target = 23
            //First Merge Sort the given array

function mergeSorting(num){
if (num.length<=1){
    return num
}

    let middle = Math.floor(num.length/2)
    let left = num.slice(0,middle)
    let right = num.slice(middle)

    return sortedArray(mergeSorting(left),mergeSorting(right))
}
function sortedArray(left,right){
    let emptyArr = []

    while(left.length && right.length){

   if(left[0]<right[0]){
    emptyArr.push(left.shift());
   }
   else{
   emptyArr.push(right.shift())

}
    }
    return [...emptyArr,...left,...right]

}

console.log(mergeSorting(num));
            //Binary search section

            //Then you Get The Binary Search.

function binarySearch(num, Target){
    let left = 0;
    let right = num.length-1;

    while(left<=right){
        let middle = Math.floor((left+right)/2);
    if (num[middle]===Target){
        return middle;

    }
    else if(num[middle]>Target){
        right = middle-1;
    }
    else{
        left = middle + 1;

    }
}

 return null
    }
    console.log(binarySearch(num, Target))

                // QUESTION//

//Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
function leapYear(){
for(let year = 2001; year<=2023; year++){
    if(year % 4 === 0){
        console.log(year +" is a leap year");
    }
    console.log(year +" is not a leap year");
}
}
leapYear();

                    //QUESTION 5//

//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.


for(let num = 0; num<=100;num++){
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


console.log("Alternative way to do this");

            //QUESTION 4 ALTERNATIVE METHOD
function numm(numArray){
    numArray.forEach(numm => {
        console.log(numm*4);        
    });
}
numm(numArray)

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




