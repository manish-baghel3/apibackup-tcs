import mongoose from 'mongoose';
import { Configuration } from './config';

export class DbUtil {

    public static async init() {
        try {
            let dbUrl = Configuration.get('db_url');
            await mongoose.connect(dbUrl);
            console.log('Db Connected.');
        } catch (err) {
            console.error('Db connection failed', err)
        }
    }
}