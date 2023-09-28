- Name: Antriksh Dangi 
- College: IIT Dhanbad
- Department: B.Tech (Mechanical Engineering)

# Ginger

Ginger is a messaging service prototype It uses Socket.io for real time communication and stores user details in encrypted format in Mongo DB Database.



## TechStacks
Client: React JS with Chakra UI Library

Server: Node JS, Express JS

Database: Mongo DB
## Features

- Clean and Intuitive user Interface
- User Registration and Authentication
- Real Time Chatting with Typing indicators
- Sending and receiving text messages between users
- One to One chat
- Search Users
- Create Group Chats
- Real-time message updates
- Notifications
- Add or Remove users from group
- View Other user Profile
- Login Password Encryption


## Optional Features

- AI powered chatbot for user.
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`MONGO_URI`: This can be generated from your MongoDB project          profile. 

`JWT_SECRET`: You can name it whatever you want

`NODE_ENV`: production


## Run Locally

Clone the project

```bash
  git clone https://github.com/antriksh-9/Ginger_chat-app
```

Go to the project directory

```bash
  cd Ginger_chat-app
```

Install dependencies

For backend: 
```bash
  npm install
```
For frontend: 
```bash
  cd frontend/
  npm install
```

Start the server

```bash
  npm start
```
Start the client

```bash
  cd frontend/
  npm start
```


## Deployment

I have deployed this project on a cloud platform Render.com


## Demo

https://ginger-app.onrender.com/


## FAQ

#### Why I have used Chakra UI Library?

Chakra UI is a popular and highly regarded React UI library known for its accessibility, ease of use, and customization options.
Chakra UI provides a set of predefined styles and components.

#### Why I have used Socket.io for real-time messaging?

I have used Socket.io for real-time communication in web applications, enabling instant updates and interactions between clients and the server.

#### Why I have used JWT and bcrypt.js for authentication?

I have used JWT (JSON Web Tokens) for secure user authentication and authorization, while bcrypt.js is used to securely hash and store user passwords in databases.


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

