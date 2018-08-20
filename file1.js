function createGreeting(name, age) {
    const birthyear = yearOfBirth(age);
    return `Hello my name is ${name} and I'm ${age} years old. I was born in ${birthyear}`;
}

function yearOfBirth(age) {
    const year = 2018 - age;

    if (age < 0) {
        throw new Error("Age cannot be negative");
    }

    else {
        return year;
    }
}

try {
    yearOfBirth(2);
}

catch(e) {
    console.error(e.message);
}

const output = createGreeting("Aaron", 24);
console.log(output);

