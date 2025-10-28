# Projeto MedTime (Full-Stack)

Este é um projeto de agendamento de medicamentos construído com uma arquitetura moderna de SPA (Single Page Application).

O projeto é dividido em duas partes independentes que se comunicam via API RESTful:

* **Backend (API):** Uma API construída em **Node.js**, **Express** e **MySQL**. É responsável por toda a lógica de negócios, autenticação com JWT e conexão com o banco de dados.
* **Frontend (Cliente):** Uma aplicação construída em **Angular**, responsável por toda a interface do usuário e experiência de uso no navegador.

## 🔧 Configuração do Backend (API)

Siga os passos abaixo para configurar o servidor da API (a "cozinha" do projeto).

1.  **Acesse a pasta do backend:**
    ```bash
    cd Meu-Projeto-MedTime/backend-express
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Configure a Conexão:**
    * Abra o arquivo `backend-express/config/db.js`.
    * Insira as credenciais do seu banco de dados (usuário e, principalmente, a senha):
        const connection = mysql.createConnection({
          host: 'localhost',
          user: 'root', // Seu usuário do MySQL
          password: 'SUA_SENHA_AQUI', // SUA SENHA DO MYSQL AQUI
          database: 'medtime_db'
        });
        ```

## 🎨 Configuração do Frontend (Angular)

Siga os passos abaixo para configurar a aplicação cliente (o "salão" do projeto).


2.  **Acesse a pasta do frontend:**
    cd Meu-Projeto-MedTime/frontend-angular
    

3.  **Instale as dependências:**
    npm install

# Na pasta /backend-express
node app.js
