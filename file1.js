function createGreeting(name, age) {
    return `Hello my name is ${name} and I'm ${age} years old.`;
}

function yearOfBirth(age) {
    const year = 2018 - age;
    return `I was born in ${year}`;
}

const output = createGreeting("Aaron", 24);
console.log(output);
const output2 = yearOfBirth(24);
console.log(output2);

