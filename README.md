
# Realtime Chat App (Assignment)

Welcome to Chat App! This repository contains the source code for a real-time chat application, with message history. With Chat App, users can communicate with each other in a seamless and interactive manner.

Link to try it out: https://chatapp-mercor.web.app/

## Features

- **Real-time messaging:** Users can send and receive messages instantly, allowing for smooth and efficient communication.
- **User authentication:** Secure user authentication is implemented to ensure that only registered users can access the chat application.
- **Online presence indication:** Users can see the online status of other users, making it easy to identify who is currently active.
- **Message history:** The application stores chat history, allowing users to view previous messages even after logging out and logging back in.
## Tech Stack

**Client:** ReactJS, Firebase, Socket.io-Client, TailwindCSS

**Server:** NodeJS, ExpressJS, Socket.io, Sequelize

**Database**: Cloud SQL (PostgreSQL) 


## Run Locally

Clone the project

```bash
  git clone https://github.com/FreSauce/chat-app-mercorio.git
```

Go to the project directory

```bash
  cd chat-app-mercorio
```

The project has two components, server and client.
Both components have their `.env` files, and `.env.sample` files are present in the repository. Generate a `.env` file and fill the fields. Then, the server and client can be run. 

Also, the project needs a service account for Firebase Admin SDK (used for server side authentication of users). You can mail me at `24shardul@gmail.com` for the service account key, or generate it on firebase console.

Server start:

```bash
  cd server
  npm install
  npm run dev
```

Client start:
```bash
  cd app
  npm install
  npm run dev
```

## Screenshots

![App Screenshot](https://raw.githubusercontent.com/FreSauce/chat-app-mercorio/master/ss.png)


## Demo

Video for code explanation and project demo.

https://www.youtube.com/watch?v=NL8I4MQgQmM
