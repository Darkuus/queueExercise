# Queue Manager

This is a simple solution to the problem proposed by my **High Performance Code** teacher.

The problem resumes in using the queue data structure to build an application to manage a bank queue. There\`re two types of queues: **Priority Queue** and a **Non-Priority Queue** and we must use the queue structure to handle the order that the customers are attended.

## Getting Started

### Code from Repository
Use npm install or yarn install to get all dependencies.

```bash
npm install
```
```bash
yarn install
```

### Live Applications

You can access both Api and App that are hosted in **Heroku**

[WebApp](https://queue-h-frontend.herokuapp.com/)

[WebApi](https://queue-h-backend.herokuapp.com/)

## Brief Introduction

There\`re two main groups of pages in this application.

### 1. Client Side
- **Home**: Here the users choose in which queue they want to enter.


- **PickQueue**: Here the users can insert their **CPF** to get a ticket.


- **ClientInfo**: Here the users can see their ticket that they get in the previous page (PickQueue)

### 2. Manager Side
- **Box**: Here the managers can track clients tickets and call next ticket.

## Usage
**PickQueue** and **Box** pages have their variants (Prioriority and Non-Priority):

`/PickPriPueue` to access the page where the user can pick a token in the Priority Queue.

`/PriBox` to access the page where the manager can keep track and call next tokens. 

`/PickNPriPueue` to access the page where the user can pick a token in the Non-Priority Queue.

`/NPriBox` to access the page where the manager can keep track and call next tokens.
