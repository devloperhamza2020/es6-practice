const person = {name: 'Mr. Hamza', age: '23', job: 'web designer', gfName: 'shahinur akter lovely', address: 'mirsarai, chittagong, bangladesh', phone: '01884296377', friend: ['lovely', 'shahinur', 'amir', 'shawon']};


// const gfName = person.gfName;
// const phone = person.phone;
// console.log(person.gfName, phone);
// console.log(person.gfName, phone);


// This is Destructure object
const { phone, gfName, address, salary } = person;
console.log(gfName, phone, address, salary);
console.log(gfName, phone, address, salary);