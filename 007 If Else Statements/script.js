/*
 * IF / ELSE Statements
 */

var name = 'Stephan';
var maritalStatus = 'Married';

/*
if(maritalStatus === 'Married'){
    console.log(name + ' is a Married person.');
} else {
    console.log( name + ' is a Single person and will marry soon...');
}
*/

var isMarried = maritalStatus === 'Single';

if(isMarried){
    console.log(name + ' is a Married person.');
} else {
    console.log( name + ' is a Single person and will marry soon...');
}