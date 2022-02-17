# Headless eCommerce - Category Page CaseStudy

A case study for  headless eCommerce Store Frontend with Symfony and Vue.js

## Dependencies

To use the environment with Docker:
-   Install docker: https://docs.docker.com/engine/installation/

## Getting Started

The easiest way to start the application is to use the Docker environment. 
The docker environment is based on https://github.com/alexanderweigelt/DockerDevbox

### First time

1. `cp .env.dist .env` and adjust application settings in the .env file.
2. `make pull` to pull all image associated with a services defined in the docker-compose.yml file. 

    **Note:** The command does not start containers based on those images.

3. `make up` to start the environment for the first time.
4. `make install` Installs the required packages, migrates the database schema and inserts sample data.
    
    **Note:** Install the data when all setup processes in the container are finished. Check this with `docker-compose logs -f`

### Daily work

1. `make up` to **start** the application.
2. `make down` to **stop** the application.

## Author

* [Alexander Weigelt](mailto:webdesign@alexander-weigelt.de)
