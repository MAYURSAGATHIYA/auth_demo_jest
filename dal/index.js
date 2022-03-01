const {MongoClient}=require("mongodb");
const client = new MongoClient("mongodb+srv://strongdemon:kdb65GK6zYJvRcg@strong.obgla.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-lnv1hu-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",{
    
    useNewUrlParser:true,
    useUnifiedTopology:true
});


if (process.env.NODE_ENV != 'test') {
  
client.connect(err=>{

    if(err){
        console.error(err);
        process.exit(-1);
    }
    console.log("connected to mongo")
})
}

module.exports=client;


// import { MongoClient } from 'mongodb';

// const uri = process.env.DB_URI;

// const dbName = process.env.DB_NAME;

// let client = new MongoClient(uri);

// if (process.env.NODE_ENV != 'test') {
//   console.log('Connecting to database...');
//   client
//     .connect()
//     .then((res) => console.log('Connected'))
//     .catch((err) => console.log(err));

//   client.db(dbName);
// }

// export default client;
