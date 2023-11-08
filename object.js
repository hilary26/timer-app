const johnObject = {
    firstName: 'John',
    lastName: 'Doe',
    age: 2023 - 1996,
    occupation: 'Medical Doctor',
    friends: ['Micheal', 'peter', 'steven','greg']
}
console.log(johnObject);

// Dot Notation
console.log(johnObject.firstName, johnObject.friends[0]);

// Bracket Notation
console.log(johnObject['firstName']);

johnObject.location = 'spain';
johnObject.socials = '@johndoe'
johnObject.favoriteFood ='beans';


// template string literals 

console.log(`${johnObject.firstName},has ${johnObject.friends.length} friends, and his best friend is ${johnObject.friends[0]}. ${johnObject.firstName} is ${johnObject.age} years old, and he is a ${johnObject.occupation}, He lives in ${johnObject.location}, and his social media is ${johnObject.socials}`);

const sickPatient = {
    firstName: 'Tinubu',
    lastName: 'Amoda',
    healthStatus: 'Malaria',
    age: 2023 - 1954,
    gender: 'Male',
    genotype: 'ss',

}
console.log(sickPatient);

// dot notation
console.log(sickPatient.firstName);
console.log(sickPatient.healthStatus);
console.log(sickPatient.age);
// bracket notation
console.log(sickPatient['gender']);
console.log(sickPatient['genotype']);

sickPatient.residence = 'Burdillion';
sickPatient.state = 'Lagos';
sickPatient.appointment = ['mon', 'thursday', 'saturday'];
// template literals

console.log(`His name is ${sickPatient.firstName} ${sickPatient.lastName}, he is ${sickPatient.age} years old,and he is 
currently treating ${sickPatient.healthStatus},and his genotype is ${sickPatient.genotype}.He resides in ${sickPatient.residence}
 and he is from ${sickPatient.state}. His next appointment is going to be ${sickPatient.appointment[1]}`);
