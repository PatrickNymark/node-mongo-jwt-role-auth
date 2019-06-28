# JWT role authorization and authentication

This is a basic role authentication application written in Javascript using nodejs, express and mongodb.  

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
1. Node v8+
2. MongoDB v3.6+
3. Docker installed

---

#### Step 1. Clone git repository
```
$ git clone https://github.com/PatrickNymark/node-mongo-jwt-role-auth.git
```

#### Step 2. Go into cloned folder
```
$ cd node-mongo-jwt-role-auth
```
#### Step 3. Create .env
```
$ touch .env
```
#### Step 4. Add enviroment variables
> To run without docker, change mongo uri to: mongodb://localhost:27017/jwt-auth
```
mongoURI = 'mongodb://mongo:27017/jwt-auth'
secretOrKey = 'topSecretKey'
```
#### Step 5. Run with docker
> To run without docker, run npm install and then npm start
```
$ docker-compose up
```

## Author
**Patrick Nymark**

