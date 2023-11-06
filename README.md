# CRUD Locadora de Carros

# Objetivo

---

O projeto consiste em um aplicativo CRUD (Create, Read, Update, Delete) desenvolvido em Node.js, que permitirá a gestão de veículos em uma locadora de carros. Cada veículo terá informações detalhadas, incluindo ID, locadora, modelo, marca, ano, motor, número de portas, tipo de câmbio, presença de ar-condicionado e datas de criação e atualização.

# Tecnologias e dependencia

---

- Node.js;
- DOCKER;
- React.js;
- Sequelize;
- MySQL;
- Express
- mysql2;
- Nodemon;
- Cors;

# O que é possível fazer

---

1. Criar um veiculo novo;
2. Atualizar a lista de carros;
3. Deletar um veiculo criado anteriormente
4. Atualizar o campo de um veiculo 
    1. Para está função atualmente existe o erro onde o botão de editar de  um mesmo elemento só pode ser clicado novamente
     depois de clicar no botão de editar de outro elemento 

# Como rodar a aplicação

---

Logo após baixar sua versão desse projeto para sua máquina rode o seguinte comando dentro da pasta backend e frontend.

```bash
npm install
```

Agora considerando que você já tem o docker instalado, rode os seguintes comandos em seu terminal:

```bash
mkdir /tmp/mysql-data
docker run --name basic-mysql --rm -v /tmp/mysql-data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=ANSKk08aPEDbFjDO -e MYSQL_DATABASE=testing -p 3307:3306 -it mysql:8.0
```

Caso você não tenha ele em sua maquina recomendo ver o seguinte video de instalação:

[Como instalar o Docker no Windows](https://www.youtube.com/watch?v=Lgh8JgcYFwM)

Após isso rode o comando abaixo dentro da pasta backend para ativar o nodemon

```bash
npm run start
```

e o proximo dentro da pasta front end para ativar o react

```bash
npm start
```

# Como iniciar o banco

---

Como estamos usando o Sequelize não é necessário instalar nenhum SGBD porem caso você queira ver o que está ocorrendo é recomendável o uso da extenção do database client no vscode  ou instalando o mysql workbench e criando o usuário com o nome e senha do banco que você usou para rodar o docker.

Para criar o banco de dados rode na pasta backend

```bash
npx sequelize db:create
```

e para criar as tabelas, rode ainda dentro da pasta backend

```bash
npx sequelize-cli db:migrate
```

A partir daqui toda vez que o container for encerrado os dados e as tabelas sumirão, por isso quando for inicia-lo novamente sera necessário roda o comando para criar tabelas, porem os dados terão de ser colocados novamente.

Caso você queira manter os dados salvos, você pode criar um volume no docker que ira manter eles porem o mesmo deve ser atualizado com frequência já que o mesmo só tem os dados da ultima vez que você atualizou. 

# Acessando as rotas

---

As rotas existentes são acessadas na porta [localhost:3030](http://localhost/3030) porém a aplicação as chama pelo localhost:3000, por isso a utilização de CORS de acesso que permite que apenas essa url acesse o banco.

O projeto fornece os seguintes endpoints para gerenciar veículos:

- `GET /veiculos`: Retorna a lista de todos os veículos.
- `GET /veiculos/:id`: Retorna os detalhes de um veículo específico com base no ID.
- `POST /veiculos`: Cria um novo veículo.
- `PUT /veiculos/:id`: Atualiza os detalhes de um veículo existente com base no ID.
- `DELETE /veiculos/:id`: Exclui um veículo com base no ID.

A estrutura de um objeto de veículo é a seguinte:

```json
{
 "id": "cd99557a-8750-463e-a3fa-7f7bd9ecf37a",
 "locadora": "Movida",
 "modelo": "Virtus",
 "marca": "Volkswagen",
 "ano": 2023,
 "motor": "1.0",
 "portas": 4,
 "cambio": "Automatico",
 "ar_condicionado": true,
 "updatedAt": "2023-10-23T14:37:35.917Z",
 "createdAt": "2023-10-23T14:37:35.917Z"
}
```