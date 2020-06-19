# Ecoleta

O Ecoleta é uma aplicação Web que tem como objetivo de facilitar a localização de pontos de coleta de produtos reciclados. Caso você seja um ponto de coleta, cadastre-se para ser encontrado facilmente.

[Clique aqui para acessar a demo.](https://ecoleta-sc.herokuapp.com/)

![](https://repository-images.githubusercontent.com/273404769/a998d900-b1cd-11ea-8e91-58dfc85103df)


## Tecnologias e Recursos

O projeto foi desenvolvido utilizando as seguintes tecnologias e recursos:

* NodeJs
  * Express
  * Nodemon
  * Nunjucks
* Banco de dados PostgreSQL
* HTML e CSS
  * Responsivo
  * Fontes
* Javascript
  * Requisições externas (API IBGE)
  * Combobox dinâmica

## Instalação

Antes de iniciar a instalação do Ecoleta em seu computador, você precisa ter instalado e configurado os seguintes software:
* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en/)
* [PostgreSQL](https://www.postgresql.org/)

Comece clonando o repositório para seu computador:
```
git clone https://github.com/deizerizzatti/ecoleta.git
```

Renomeia o arquivo `.env.example` para `.env`.

Agora acesse o arquivo `.env` e atualize a variável `DATABASE_URL` com a conexão do seu banco de dados PostgreSQL.

Após você precisa executar o script `database.sql` em seu banco de dados.

Instale os pacotes do Node.js com o seguinte comando:
```
npm install
``` 

E por fim, execute aplicação, com o seguinte comando:
```
npm start
```

Pronto, agora você pode acessar pelo endereço http://localhost:3000

### Contato

Você pode entrar em contato comigo via Linkedin (https://www.linkedin.com/in/deizerizzatti)

### Nota

Esta aplicação web foi desenvolvido ao decorrer do curso #NLW
