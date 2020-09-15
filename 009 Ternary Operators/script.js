/**
 |*************************************************
 | Ternary (Conditional) Operators
 |************************************************* 
 */

 let age = 22;
/*
 if(age < 18){
     console.log('The person is not eligible for driving licence');
 }else{
     console.log('The person can apply for driving license.');
 }
 */
/*
 (age < 18) ? console.log('The person can\'t apply for driving lincense.') : console.log('The person can apply for driving license.');
*/
 let canApply = age < 18 ? 'cannot apply' : 'can apply';

 console.log(canApply);