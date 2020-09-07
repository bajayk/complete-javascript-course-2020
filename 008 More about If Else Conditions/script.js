var name = "Rahul";
var age = 16;

// AND = All condtions should be true to get return true
// OR = Any of the one condition needs to be true to get return true
// NOT = Simply returns invers of true or false.

/*
if(age < 14){
    console.log(name + ' is a boy.');
}else if(age >= 14 && age < 20){ 
    console.log(name + ' is a teenager.');   
}else if(age >= 20 && age < 30){
    console.log(name + ' is a young man.');
}else{
    console.log(name + ' is a man');
}

*/

/*
var isMemberOfClub = false;

var isAthlete = true;

if(isMemberOfClub || isAthlete ){
    console.log(name + ' can enter into the Stadium.');
}
*/


if(!(age >= 18)){
    console.log(name + ' Can\'t apply for driving licenses');
}

