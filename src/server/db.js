import connect from 'mongodb';
import assert from 'assert';
import ShutdownHandler from 'shutdown-handler';

export default callback => {
	// connect to a database, then pass it to `callback`:
	const url = 'mongodb://localhost:27017';
	const dbName = 'products';
	const MongoClient = connect.MongoClient;
	
	MongoClient.connect(url, (err, client) => {
		assert.equal(null, err);		
		console.log(`Connected successfully to ${dbName} database on MongoDB server`);
	 
		const db = client.db(dbName);

		ShutdownHandler.on('exit', () => {			
			client.close();
			console.log('Closed MongoDB connection');
		});

		callback(db);		
	});
	
}