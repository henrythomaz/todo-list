#!/bin/bash

echo "Iniciando setup do ambiente Docker..."

CONTAINER_NAME="mysql"

# Remove container antigo se existir
if [ "$(docker ps -a -q -f name=$CONTAINER_NAME)" ]; then
    echo "Removendo container antigo..."
    docker rm -f $CONTAINER_NAME
fi

# Cria volume se não existir
if [ -z "$(docker volume ls -q -f name=mysql_data)" ]; then
    echo "Criando volume mysql_data..."
    docker volume create mysql_data
fi

# Cria container MySQL
echo "Criando novo container MySQL..."
docker run -d \
  --name $CONTAINER_NAME \
  -e MYSQL_ROOT_PASSWORD=senha123 \
  -v mysql_data:/var/lib/mysql \
  -p 3306:3306 \
  mysql:latest

echo "Container MySQL iniciado com sucesso!"
