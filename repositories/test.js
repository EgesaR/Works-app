const userRepo = require('./users')
console.log(userRepo);

const create = () => {
	userRepo.create({username: "Hello1", password: "waters", email: "helloworld1@gmail.com", description: "I am an inspired writer who changes people feeling or motives right"})
}

const list = async () => {
	const users = await userRepo.getAll()
	console.log(users);
}


list()