#!/bin/bash

set -e

unset REPOSITORY

export REPOSITORY=""
export BASE_DIR=`pwd`

docker swarm leave --force || /usr/bin/true

docker swarm init

docker-compose -f docker-compose.yml down

docker-compose -f docker-compose.yml up
