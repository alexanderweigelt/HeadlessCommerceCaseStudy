# I!net marketing
#
# @project    Category Page CaseStudy
# @package    scripts
# @author     Alexander Weigelt <webdesign@alexander-weigelt.de>

include .env

# If the first argument is "run"...
ifeq (run,$(firstword $(MAKECMDGOALS)))
  # use the rest as arguments for "run"
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  # ...and turn them into do-nothing targets
  $(eval $(RUN_ARGS):;@:)
endif

IP=$$(ifconfig | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1')

# Documentation
default:
	@echo "\n\
    \n\
    :: Tasks - Devbox\n\
    make up                                   Starts, pulls, (re)creates, and attaches all docker containers.\n\
	make pull                                 Pulls all images from Docker Hub (Container Image Library).\n\
    make down                                 Downs all docker containers.\n\
    \n\
    :: Development\n\
    make bash                                 Starts an interactive bash session.\n\
    make mysql                                Starts an interactive mysql session.\n\
    make run <command> [OPTION]               Run bash command inside docker container.\n\
                                              Available commands:\n\
                                                 - make run test fix\n\
    :: Helper\n\
    make myip                                 Returns the primary IP address of the local machine.\n\
    "

up: .env
	@docker-compose pull

up: .env
	@docker-compose up -d
	@echo -e "\033[1;92m Docker containers ... UP AND RUNNING\033[0m\n"

run: .env
	@docker-compose exec toolbox bash -c '$(RUN_ARGS)'

down: .env
	@docker-compose down
	@echo -e "\033[1;92m Docker containers ... DOWN\033[0m\n"

bash: .env
	@echo "\033[1;31m Note: use ssh to connect to the toolbox.\033[0m\n"
	@docker-compose exec toolbox bash

mysql: .env
	@docker-compose exec db bash

myip:
	@echo $(IP)

.PHONY: up run down bash mysql myip