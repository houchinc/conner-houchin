import mongoose from 'mongoose';
import config from 'config';


const db = config.get('mongoURI');

const connectDatabase = async () => {
    try{
        await mongoose.connect(db, {
            useUnifiedTopology:true,
            useCreateIndex: true
        });
    console.log('connected to mongoDB');
    } catch (error)
    {
        console.error(error.message);
        process.exit(1);
    }
};

export default connectDatabase;

