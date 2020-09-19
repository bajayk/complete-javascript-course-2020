/*
 * **********************************************
 * Switch Statement  
 * **********************************************
 */
/*
 var profession = 'Teacher';

 switch(profession){
    case 'Teacher':
        console.log('Teachers teaches in school and collages');
        break;
    case 'Carpenter':
        console.log('Carpenter makes wooden furnitrues and the other wooden stuff.');
        break;
    default:
        console.log('We dont know what profession you have selected.');
        break;
 }
*/

var age = 20;
/*
if(age < 12){
    console.log('A Boy');
}else if( age >= 12 && age < 19){
    console.log('A Teenager');
}else if( age >= 19 && age < 30){
    console.log('A Young Man');
}else{
    console.log('A Man');
}
*/
switch(true){
    case age < 12:
        console.log('A Boy');
        break;
    case age >= 12 && age < 19:
        console.log('A Teenager');
        break;
    case age >= 19 && age < 30:
        console.log('A Young Man');
        break;
    default:
        console.log('A Man');
}