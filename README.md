# Projeto MedTime (Full-Stack)

Este é um projeto de agendamento de medicamentos construído com uma arquitetura moderna de SPA (Single Page Application).

O projeto é dividido em duas partes independentes que se comunicam via API RESTful:

* **Backend (API):** Uma API construída em **Node.js**, **Express** e **MySQL**. É responsável por toda a lógica de negócios, autenticação com JWT e conexão com o banco de dados.
* **Frontend (Cliente):** Uma aplicação construída em **Angular**, responsável por toda a interface do usuário e experiência de uso no navegador.

---

## 🚀 Pré-requisitos

Antes de começar, garanta que você tenha as seguintes ferramentas instaladas:

* [Node.js (LTS)](https://nodejs.org/) (que inclui o `npm`)
* [Angular CLI](https://angular.io/cli) (instalado globalmente: `npm install -g @angular/cli`)
* Um servidor de banco de dados MySQL (Ex: [XAMPP](https://www.apachefriends.org/index.html), [WAMP](https://www.wampserver.com/), [MySQL Workbench](https://www.mysql.com/products/workbench/))

---

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

3.  **Configure o Banco de Dados:**
    * Inicie seu servidor MySQL (XAMPP, WAMP, etc.).
    * Abra seu gerenciador de banco de dados (ex: phpMyAdmin) e crie o banco de dados:
        ```sql
        CREATE DATABASE IF NOT EXISTS medtime_db;
        ```
    * Execute o script para criar a tabela `usuario`:
        ```sql
        USE medtime_db;

        CREATE TABLE IF NOT EXISTS usuario (
          id_usuario INT AUTO_INCREMENT PRIMARY KEY,
          nome VARCHAR(100) NOT NULL,
          email VARCHAR(100) NOT NULL UNIQUE,
          senha VARCHAR(255) NOT NULL,
          perfil VARCHAR(50) DEFAULT 'padrao'
        );
        ```

4.  **Configure a Conexão:**
    * Abra o arquivo `backend-express/config/db.js`.
    * Insira as credenciais do seu banco de dados (usuário e, principalmente, a senha):
        ```javascript
        const connection = mysql.createConnection({
          host: 'localhost',
          user: 'root', // Seu usuário do MySQL
          password: 'SUA_SENHA_AQUI', // SUA SENHA DO MYSQL AQUI
          database: 'medtime_db'
        });
        ```

---

## 🎨 Configuração do Frontend (Angular)

Siga os passos abaixo para configurar a aplicação cliente (o "salão" do projeto).

1.  **Abra um *novo terminal*** (mantenha o terminal do backend separado).

2.  **Acesse a pasta do frontend:**
    ```bash
    cd Meu-Projeto-MedTime/frontend-angular
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

---

## 🏁 Como Rodar o Projeto Completo

Para o projeto funcionar, **ambos os servidores (backend e frontend) precisam estar rodando ao mesmo tempo** em terminais separados.

### 1. Terminal 1: Rodar o Backend (API)

```bash
# Na pasta /backend-express
node app.js
