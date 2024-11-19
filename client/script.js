



function greet(name, age) {
    this.name = name;
    this.age = age;
}
greet.prototype.getFullName = function () {
    console.log(this.name);
}
const user1 = new greet("govind");
user1

