const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]
const findTheOldest = function (people) {
    const sortedPeople = people.sort((a, b) => {
        const lastPerson = a.yearOfDeath ? a.yearOfDeath - a.yearOfBirth : new Date().getFullYear() - a.yearOfBirth;
        const nextPerson = b.yearOfDeath ? b.yearOfDeath - b.yearOfBirth : new Date().getFullYear() - b.yearOfBirth;
        if (lastPerson > nextPerson) {
            return -1;
        } else {
            return 1;
        }
    })
    return sortedPeople[0];

};
const oldestPerson = findTheOldest[0];
// Do not edit below this line
module.exports = findTheOldest;
