FROM alpine

ARG POCKETBASE_VERSION=0.16.4

# Install the dependencies
RUN apk add --no-cache \
    ca-certificates \
    unzip \
    wget \
    zip \
    zlib-dev

# Download Pocketbase and install it for AMD64
ADD https://github.com/pocketbase/pocketbase/releases/download/v${POCKETBASE_VERSION}/pocketbase_${POCKETBASE_VERSION}_linux_amd64.zip /tmp/pocketbase.zip
RUN unzip /tmp/pocketbase.zip -d /pocketbase
RUN chmod +x /pocketbase/pocketbase
RUN rm /tmp/pocketbase.zip

WORKDIR /pocketbase

# Notify Docker that the container wants to expose a port.
EXPOSE 8090

# Start Pocketbase
CMD [ "./pocketbase", "serve", "--http", "0.0.0.0:8090"]
