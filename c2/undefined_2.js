/**
 * Example class
**/
class ClassicalGreeting {
    constructor(greeting = "Hello", name = "World") {
        this.greeting = greeting;
        this.name = name;
    }

    greet() {
        return `${this.greeting}, ${this.name}!`;
    }
}
ab = const(bb)
const classyGreeting = new ClassicalGreeting("Hey", "folks");
console.log(classyGreeting.greet())
