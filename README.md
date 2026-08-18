## Agenda

Projeto de uma aplicação de Agenda de Contatos, desenvolvido durante meus estudos no curso de JavaScript e Node.js

O projeto tem como objetivo colocar em prática conceitos de desenvolvimento web com JavaScript no backend, organização de projetos e arquitetura MVC.

## Tecnologias utilizadas
JavaScript
Node.js
Express
EJS
MVC (Model-View-Controller)
Middlewares
Rotas
dotenv
npm

## Estrutura do projeto

```text
ProjetoAgenda/
├── frontend/
│   ├── assets/
│   └── modules/
│
├── public/
│   └── assets/
│
├── src/
│   ├── controllers/
│   │   ├── contatoController.js
│   │   ├── homeController.js
│   │   └── loginController.js
│   │
│   ├── middlewares/
│   │   └── middleware.js
│   │
│   ├── models/
│   │   ├── ContatoModel.js
│   │   ├── HomeModel.js
│   │   └── LoginModel.js
│   │
│   └── views/
│       ├── includes/
│       │   ├── footer.ejs
│       │   ├── head.ejs
│       │   ├── messages.ejs
│       │   └── nav.ejs
│       │
│       ├── 404.ejs
│       ├── contato.ejs
│       ├── index.ejs
│       ├── login.ejs
│       └── login-logado.ejs
│
├── .babelrc
├── .gitignore
├── package.json
├── package-lock.json
├── routes.js
└── server.js
```

## Como executar o projeto

Clone este repositório:

git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git

Entre na pasta do projeto:

cd ProjetoAgenda

Instale as dependências:

npm install

Depois, execute o projeto com o comando configurado no package.json.

Por exemplo:

npm start
