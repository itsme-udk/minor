import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://user:blogastha@ac-nqiz74s-shard-00-00.xgipyvp.mongodb.net:27017,ac-nqiz74s-shard-00-01.xgipyvp.mongodb.net:27017,ac-nqiz74s-shard-00-02.xgipyvp.mongodb.net:27017/?ssl=true&replicaSet=atlas-pjd17r-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;