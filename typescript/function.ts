function getSum ( num1:number,  num2:number) :number{
    return num1  *  num2 ;
}

console.log(getSum(3, 4));

let mySum = function (num1:  any,  num2:  any): number{
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
}
   if (typeof num2 == 'string') {
    num1 = parseInt(num2);
}

    return num1 + num2;
}

console.log(mySum('5', 4));

function getName(firstName: String, lastName?:  String): String{
    if (lastName== undefined) {
        return firstName;
    }
    return firstName +'  ' +lastName;
}
console.log(getName('FA', 'Shishir'));


function myVoid():  void{
    return;
}