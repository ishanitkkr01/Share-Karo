import mongoose from 'mongoose';


const DBConnection =async () => {
    const MONODB_URI=`mongodb://isha:Suraj01@ac-slhlho7-shard-00-00.ayjlsc6.mongodb.net:27017,ac-slhlho7-shard-00-01.ayjlsc6.mongodb.net:27017,ac-slhlho7-shard-00-02.ayjlsc6.mongodb.net:27017/?ssl=true&replicaSet=atlas-vszgat-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(MONODB_URI, { useNewUrlParser: true});
        console.log('Database connected successfully')
    } catch (error) {
        console.error('Error while connecting with the database ',error.message);

    }
}

export default DBConnection;