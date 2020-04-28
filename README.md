# Dockerized Django Angular API Template

Requires: [Node.js, npm](https://nodejs.org/) and [Docker](https://www.docker.com/get-started) along with their command line interfaces. This template assumes Node v12.6.0, but should be changed to match your local version in the Dockerfile at *./frontend/Dockerfile* to support live development updates.


To get started, clone and build the project from your command line:
```
~$ git clone https://github.com/vdaynm/dockerized-django-angular-api-template.git
~$ cd ./dockerized-django-angular-api-template
~$ docker-compose up --build
```

When Docker has started the Angular Live Development Server, in your browser, go to http://localhost:4200/ to see the API. The main page will **Get** a list of Items, a form to **Post** New Items, and the option to **Update or Delete** when an Item is selected.


To take the project down:
```
~$ docker-compose down
```
