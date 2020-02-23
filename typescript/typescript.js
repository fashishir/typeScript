var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a;
var b;
var FA;
var c;
a = 10;
b = "Shishir";
c = true;
FA = 'fashishir';
function add(a, b, FA) {
    return a + b + FA;
}
var ab = add(a, b, FA);
console.log(ab);
//add(2, "shishir", 6);
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.greet = function () {
        console.log("Hey FA");
    };
    return User;
}());
var programmer = /** @class */ (function (_super) {
    __extends(programmer, _super);
    function programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return programmer;
}(User));
var aprogrammer = new programmer();
aprogrammer.greet();
