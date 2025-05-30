# Cria container MySQL
echo "Criando novo container MySQL..."
docker run -d \
  --name mysql \
  -e MYSQL_ROOT_PASSWORD=root \
  -v mysql_data:/var/lib/mysql \
  -p 3306:3306 \
  mysql:latest
  
# Espera o MySQL iniciar
echo "Aguardando o MySQL iniciar..."
sleep 20

# Cria banco de dados e tabela automaticamente
echo "Criando banco de dados e tabela..."
docker exec -i mysql mysql -uroot -proot <<EOF
CREATE DATABASE IF NOT EXISTS todolist;
USE todolist;
CREATE TABLE IF NOT EXISTS tasks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    status VARCHAR(45) NOT NULL,
    created_at VARCHAR(45) NOT NULL
);
EOF

echo "Banco de dados e tabela criados com sucesso!"
