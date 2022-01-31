# Headless eCommerce - Category Page CaseStudy



## Dependencies

To use the environment with Docker:
-   Install docker: https://docs.docker.com/engine/installation/

## Getting Started

The easiest way to start the application is to use the Docker environment. 
The docker environment is based on https://github.com/alexanderweigelt/DockerDevbox

### First time

1. `cp .env.dist .env` and adjust application settings in the .env file.
2. `make pull` to pull all image associated with a services defined in the docker-compose.yml file. 
Note: The command does not start containers based on those images.

### Daily work

1. `make up` to **start** the application.
2. `make down` to **stop** the application.

## Author

* [Alexander Weigelt](mailto:webdesign@alexander-weigelt.de)
