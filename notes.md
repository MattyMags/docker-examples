# Commands

- docker ps // show containers
- docker ps -a // show all containers

// Building

- docker build . // build the image
- docker build -t dockerID/ProjectName:latest // naming & tagging container

// Clean up

- docker system prune
- docker run -it alpine sh // docker shell
- docker commit -c 'CMD ["redis-server"]' c93bf0d4ef8c // commiting
- docker run -p 8080:8080 <image id> // Port Forwarding
- docker run -it mattymags/tag sh // open the sh for the container
  - ls
- docker exec it <name> sh // open the sh for a running container

// Docker Compose

- docker-compose up // builds the image from the docker-compose.yml
- docker-compose up --build // Start up container but REBUILD
