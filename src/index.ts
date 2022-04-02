// Read Envs
import { Configuration } from './utils/config';
Configuration.init();

// Configure Logs

// Configure Error Monitoring & APM

// Init db.
import { DbUtil } from './utils/dbUtil'
DbUtil.init();

// Start Express Server
import ExpressServer from './server';
ExpressServer.start();