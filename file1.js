function createGreeting(name, age) {
    const yearOfBirth = 2018 - age;
    return `Hello my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}`;
}

const output = createGreeting("Aaron", 24);
console.log(output);

