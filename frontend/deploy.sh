#!/bin/env zsh

docker build -t frontend:latest .

docker run -p 3000:80 frontend:latest