# Case study for headless e-commerce

> A case study for a headless e-commerce shop frontend, using a category page as an example.

Read the complete case study [here](./docs/CaseStudy.md)

## The e-commerce store frontend example

### Dependencies

To use the environment with Docker:
-   Install docker: https://docs.docker.com/engine/installation/

### Getting Started

The easiest way to start the application is to use the Docker environment. 
The docker environment is based on https://github.com/alexanderweigelt/DockerDevbox

#### First steps

1. `cp .env.dist .env` and adjust application settings in the .env file.
2. `make pull` to pull all image associated with a services defined in the docker-compose.yml file. 

    **Note:** The command does not start containers based on those images.

3. `make install` Installs the required packages, migrates the database schema and inserts sample data.
    
    **Note:** Install the data when all setup processes in the container are finished. Check this with `docker-compose logs -f`

4. `make up` to start the environment for the first time.

### Usage

After installing and starting the application, call:
* API [http://localhost/api/](http://localhost/api/)
* Frontend (headless storefront) [http://localhost:8080/](http://localhost:8080/)

    Read [more](./storefront/README.md)

**Note:** Use custom settings in the .env file for the ports _PORT_NODE_ and _PORT_HTTP_

---

## Author

* [Alexander Weigelt](mailto:webdesign@alexander-weigelt.de)
