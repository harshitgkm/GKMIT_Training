-------------------------
- If I want to use the image defined in Dockerfile in the docker-compose.yml. you just have to simply create Dockerfile, docker-compose.yml and then run :
- docker compose build
- docker-compose up


--------------------------
# using mongo inside docker

* To enter docker mongo shell from Mac terminal:
- docker exec -it mongodb /bin/bash or 	•docker exec -it mongodb /bin/sh
- Mongosh -u mongo. -p Abcd_1234 or

* To enter postgres shell:
- docker exec -it postgres psql -U pgsql -d
- docker exec -it <container_name_or_id> psql -U <username> -d <database_name>
- psql --username pgsql


--------------------------
# setup mongo db dump

* Start the container
* docker cp dump <container_id>:/dump (outside container)
* Access the MongoDB Container: docker exec -it mongodb bash
* Restore the container: mongorestore --username mongo --password Abcd_1234 --authenticationDatabase admin  --db pillpal dump/pillpal
* (mongorestore --username yourUsername --password yourPassword --authenticationDatabase admin /dump)



--------------------------
# Tasks

* Docker file copy 
* Volume copy 
* ~/services/mongo/db_mongo_new



---------------------------

# mongo scripts

- In MongoDB, scripts refer to JavaScript code that can be executed on the MongoDB server. These scripts can be used for various purposes, such as performing database operations, data manipulation, and administrative tasks. You can run scripts in the MongoDB shell or save them in .js files for later execution.
- Uses of MongoDB Scripts
1. Data Insertion: Automate the process of adding data to collections.
2. Data Querying: Run complex queries that may not be easily executed from the command line.
3. Data Updates: Perform bulk updates or conditional modifications.
4. Database Management: Handle administrative tasks like creating indexes or backups.


- How to Use MongoDB Scripts
- You can run scripts in two ways:
1. Directly in the MongoDB shell: Type JavaScript commands directly in the MongoDB shell.
2. From a .js file: Save your JavaScript code in a file and execute it using the MongoDB shell.


- docker cp script.js  5d9e04a6cc44f3258f25dd9f2cabc911816b22ad5b100578dd24d32f183e9ff6:/data/db


- In js file write the line to connect to the database.

db = connect(
	"mongodb://mongo:Abcd_1234@localhost:27017/pillpal?authSource=admin",
);



-----------------------------

# Redis - send otp via email



// Send OTP via email
const sendOtpEmail = async (email, otp) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`,
  });
};


# RUN Redis in Docker

- Docker start redis
- docker exec -it my-redis redis-cli
- keys *
- get mykey
- type mykey



# Connect Redis

const Redis = require('ioredis');

const redis = new Redis({
  host: 'localhost',
  port: 6379,
});


-------------------------------

# Establishing PostgreSQL Connection with TypeORM in NestJS- https://dev.to/vishnucprasad/establishing-postgresql-connection-with-typeorm-in-nestjs-4le3

# migrations in typeorm with nestjs: https://dev.to/andymwamengo/how-to-create-and-generate-migrations-in-typeorm-03-with-nestjs-9-4g55
