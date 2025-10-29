## Projeto MedTime

* Este é um projeto de registro de alarmes de medicamentos, onde o usuário pode escanear o qrcode ou adicionar a url da sua receita e o aplicativo gera uma serie de horários conforme foram passadas pelo médico.

* O Medtime visa ajudar pessoas que usam medicamentos regularmente, oferecendo suporte para seu uso correto e promovendo tranquilidade para elas e para quem está ao seu redor.

## Pesquisa sobre o Automedicamento 

* Uma pesquisa realizada pelo Conselho Federal de Farmácia (CFF), por meio do Instituto Datafolha, constatou que a automedicação é um hábito comum a 77% dos brasileiros que fizeram uso de medicamentos nos últimos seis meses. Quase metade (47%) se automedica pelo menos uma vez por mês, e um quarto (25%) o faz todo dia ou pelo menos uma vez por semana. Inédita na história dos conselhos de Farmácia, a pesquisa investigou o comportamento dos brasileiros em relação à compra e ao uso de medicamentos. O estudo detectou ainda uma modalidade diferente de automedicação, a partir de medicamentos prescritos. Nesse caso, a pessoa passou pelo profissional da saúde, tem um diagnóstico, recebeu uma receita, mas não usa o medicamento conforme orientado, alterando a 
dose receitada. 

* Fonte:

- https://portal.crfsp.org.br/noticias/10535-pesquisa-aponta-que-77-dos-brasileiros-tem-o-habito-de-se-automedicar.html

## Problema:
* Esquecimento de horários e doses
* Falta de conclusão do tratamento
* Uso inadequado de medicamentos
* Automedicação
* Dificuldade em acompanhar múltiplos medicamentos
* Impacto psicológico e social

## Solução:
* Registro e acompanhamento digital do tratamento, com horários, doses e duração.
* Sistema de lembretes e notificações para garantir o uso correto dos medicamentos.
* Importação automática de receitas via QR Code ou URL.
* Informações educativas sobre os riscos do uso inadequado de medicamentos.
* Monitoramento seguro por familiares ou cuidadores.

## Objetivos do Projeto
- Facilitar o cotidiano de pacientes no controle de medicamentos.  
- Criar uma plataforma digital acessível e intuitiva para organização de horários e dosagens.  
- Reduzir erros na administração de medicamentos.  
- Oferecer alarmes e notificações para lembrar o horário correto da medicação.  

## Funcionalidades Planejadas
- Leitura de QR Code para importação automática da prescrição médica.  
- Sistema de lembretes e alarmes para cada medicação.  
- Orientações sobre uso correto dos medicamentos.  
- Aplicação Web para acesso remoto e sincronização de dados.

## Tecnologias Utilizadas
- Frontend Web: Angular.
- Mobile: Flutter.
- Backend: Node.js / Express.
- Banco de Dados: Mysql.
- API: RESTful integrada entre Web e Mobile.

## Público-Alvo
- Pacientes em tratamento contínuo.  
- Idosos ou pessoas com dificuldades de memória.  

## Políticas de Uso e Privacidade
- Os dados pessoais dos usuários serão armazenados de forma segura e criptografada.  

* Link do Figma:

- https://www.figma.com/design/PeywmyX17F1wwoMebFck7d/Untitled?node-id=0-1&t=Iu7r2cltIvgTNQgG-1

## Como Executar o Projeto:
- Instalar as dependências do projeto "npm install".
- Acessar a pasta "backend-express".

## Configure a Conexão:
    - Abra o arquivo `backend-express/config/db.js`.
    - Insira as credenciais do seu banco de dados (usuário e, principalmente, a senha):
        const connection = mysql.createConnection({
          host: 'localhost',
          user: 'root', // Seu usuário do MySQL
          password: 'SUA_SENHA_AQUI', // SUA SENHA DO MYSQL AQUI
          database: 'medtime'
        });

* Na pasta backend-express rode "node app.js".
