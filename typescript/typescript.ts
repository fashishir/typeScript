let a : number;
let b: string;
let FA: any;
let c: boolean;

a = 10;
b = "Shishir";
c = true;
FA = 'fashishir';
function add ( a :number, b :string, FA : any) {
    return a + b + FA ;
}
let ab = add( a, b, FA);

console.log(ab);
//add(2, "shishir", 6);

class User {
    firstName: string;
    lastName: string;
    greet() {
        console.log("Hey FA");
    }
}
class programmer extends User{

}
let aprogrammer = new programmer();
aprogrammer.greet();