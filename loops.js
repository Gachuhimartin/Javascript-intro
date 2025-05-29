//for loops
// let numbers=[1,2,3,4,5,6,7];

// let idx=0;
//let lengthOfArray=numbers.length;console.log(numbers[idx]);

//for(let idx=0;idx<numbers.length;idx++){
 //   console.log(numbers[idx]);
//}

//for(let num=0;num<100;num++){
 //   console.log(num);
//}

//While loops

// while(idx<numbers.length){
//     console.log(numbers[idx]);
//     idx++;
// }

// let sum=0;
// while(true){
//     console.log('Loop');
//     sum++;

//     if(sum===10)
//         break;
// }

// let i=0;

// do{
//     console.log(i);
//     i++
// }
// while(i<10);


// const course={
//     name:'Javascript',
//     duration:3,
//     sections:7,

// };


//for in loop
// for(const key in course){
//     console.log(course[key]);
// }

//for of loop
// for(let element of numbers){
//     console.log(element);
// }

//break and continue statements

// for(let i=0;i<10;i++){
//     if(i===5){
//         break;
//     }
//     console.log(i);
// }


// let i=0;
// while(i<10){
//     if(1===5){
//         break;
//     }
//     console.log(i);
//     i++;
// }

// let i=0;
// do{
//     if(i===5){
//         break;
//     }
//     console.log(i);
//     i++;
// }while(i<10);



// const obj={a:1,b:2,c:3};
// for(let key in obj){
//     if(key==='b'){
//         break;
//     }
//     console.log(obj[key]);
// }

const arr=[1,2,3,4,5];
for(let element of arr){
    if(element===3){
        break;
    }
    console.log(element);
}

//Continue is similar