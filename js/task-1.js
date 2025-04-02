const user = {
	name: "Jacob",
	age: 32,
	email: "j.cob@mail.com",
	isOnline: true
};

const { name: nameUser, isOnline, ...otherProps } = user;

console.log(nameUser); // "Jacob"
console.log(isOnline); // true
console.log(otherProps); // {age: 32, email: "j.cob@mail.com"}
console.log(otherProps.email); // j.cob@mail.com
