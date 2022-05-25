# Uses an existing docker image a base 
FROM alpine

# Download and isntall a dep
RUN apk add --update gcc
RUN apk add --update redis


# Tell the image what to do when it starts as a container
CMD ["redis-server"]