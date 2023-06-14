# Docker

Docker is a platform designed to make it easier for developers to create, deploy, and run applications. It does this by using containers.

Now you might be wondering, what are containers? You can think of containers as a sort of "box" in which we pack our application along with all the things it needs to run - such as libraries, dependencies, and even the system settings - and that box can run consistently on any machine that has Docker installed. It doesn't matter if it's your laptop, your friend's laptop, or a server in a data center halfway around the world - if it has Docker, it can run the container, and therefore, your application.

The real-world analogy I love to use for Docker is the shipping industry. In the old days, shipping goods was a complex affair. Goods of different sizes and shapes needed to be packed carefully into ships - it was time-consuming and error-prone. Then came the innovation of shipping containers. No matter what was inside, the outside was standardized, so it could be handled the same way, greatly simplifying and speeding up the logistics. Docker is like that, but for software.

## Why are we using Docker? Here are a few reasons:

- Consistency: Docker ensures that your application runs the same way, no matter where it is. You no longer have to hear, "But it works on my machine!" It eliminates those hard-to-replicate 'environmental bugs' that crop up when software works in one place, but not in another.

- Simplicity: Docker simplifies setting up your development environment. You can define what you need (like a specific version of Node.js, or a MySQL database) in a Dockerfile, and Docker will set it up for you. If you get a new computer, you can be up and running with your development environment in no time.

- Isolation: Docker provides isolation by ensuring that each container has its own resources that are isolated from other containers. This means you can have one project running Python 2 and another using Python 3, both on the same machine, without any conflicts.

- Portability and Sharing: With Docker, you can easily share your app, with all its dependencies, and know it will run, no matter the recipient's environment. Docker images can be shared through Docker Hub, a repository for Docker images, just like GitHub is a repository for code.

We're going to be using Docker to run MySQL for our projects. MySQL is a database, which is used to store and retrieve data for your application. Running MySQL in a Docker container simplifies the process of setting up and configuring MySQL, and ensures that every student's MySQL setup is exactly the same.

We're entering a new phase in our learning journey where we'll deal with more complex, real-world-like software applications. Docker is going to be a valuable tool in our kit, enabling us to focus more on building amazing things and less on wrestling with setup and 'environmental issues'.


## Install Docker 
```
brew install docker
```

## Install WorkBench

```
brew install --cask mysqlworkbench
```

## Pull Docker Conatiner

```
docker pull amd64/mysql
```

## Install node packages

```
npm install
```