# tcs_server

Repository of the main TCS API. This micro-service is the backend for TCS. 

### Step by step process

You need to first set environmental variables before moving to further steps. 

Running Locally -->

First step will be to create ".env" file which will contain FOUR secret parameters, 
"SERVER_TOKEN_SECRET" - Secret to Sign JWT Tokens.
"NODE_ENV" - Environment name (local, test, production)
"PORT" - For Ex: 8080, but for this app we will normally have 3301
"db_url" - Database Connection URL.

Note - In other environments all params are required except "PORT".

Second Step will be to Install all the required dependencies,

```bash
npm install
```

After Successfull installation of all the dependencies we are ready to Start the Service,

To start the service,
Run the "nodemon" script or 
```bash
npm run nodemon
```

( This script is used for Hot Reloading )
OR

Run the "swagger" script and then "start-dev" script. or 
```bash
npm run swagger
``` 

then 
```bash
npm run start-dev
```

( Does not support Hot Reloading )

Go to: http://localhost:3301