const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGO_URL;


module.exports = async function() {
    let users = await getUsers();
    return users;
}

async function getUsers() {

	const client = new MongoClient(url, { useUnifiedTopology: true });
  	await client.connect();
  	const db = client.db('tinyprofiles');
  	const users = db.collection('users');

	const query = { "public": true };
	const userArray = await users.find(query).toArray();
	await client.close();
	return userArray;
  console.log("DB Connected")
}