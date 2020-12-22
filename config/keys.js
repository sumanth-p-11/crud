const username=require('./appConfig').username;
const password=require('./appConfig').password;
const dbName=require('./appConfig').dbname;
module.exports={
//  mongoDBUri:`mongodb+srv://${username}:${password}@cluster0.0ym1o.mongodb.net/${dbName}?retryWrites=true&w=majority`,


mongoDBUri:`mongodb://${username}:${password}@cluster0-shard-00-00.t7wak.mongodb.net:27017,cluster0-shard-00-01.t7wak.mongodb.net:27017,cluster0-shard-00-02.t7wak.mongodb.net:27017/${dbName}?ssl=true&replicaSet=atlas-13vobc-shard-0&authSource=admin&retryWrites=true&w=majority`
}