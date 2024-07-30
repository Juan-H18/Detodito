const { MongoClient } = require('mongodb');

async function main(){
    const uri = 'mongodb://localhost:27017/players';
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log('Connected correctly to server');
        
        await listDatabases(client);
        
        await insertData(client);
        

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
        console.log('Connection closed');
    }
}

main().catch(console.error);

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();
    console.log('DATABASES:');
    databasesList.databases.forEach(db => console.log(`- ${db.name}`));
}

async function insertData(client){
    const database = client.db('balondeoro'); 
    const collection = database.collection('jugadores'); 

    const doc = {
        name: "Radamel Falcao",
        position: "Delantero",
        team: "Millonarios",
        stats: {
            gamesPlayed: 25,
            goals: 15,
            assists: 5
        }
    };

    const resultado = await collection.insertOne(doc);
    console.log(`New document inserted with the following id: ${resultado.insertedId}`);
}
