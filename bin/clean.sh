#!/bin/bash

docker volume rm $(docker volume ls -qf dangling=true)
docker rmi $(docker images -q -f "dangling=true") --force
