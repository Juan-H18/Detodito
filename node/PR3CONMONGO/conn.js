const {MongoClient} = require('mongodb')

async function main(){
    const uri = 'mongodb://localhost:27017/players';
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log('Connected correctly to server');

        await listDatabases(client);
    }catch(e){
        console.error(e);
    }
    finally{
        await client.close();
        console.log('Connection closed');
    }
}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    console.log('DATABASES: ');
    databasesList.databases.forEach(db => console.log(`- ${db.name}`))
}