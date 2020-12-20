## Descrição
Código do servidor back-end feito em node utilizando nest, typeorm e postgres.

## Configuração

 - Edite o arquivo `.env` com os dados de conexão do banco de dados seguindo o exemplo:
```text
PORT=4000
SECRET_KEY=t-yiw9jy-xutE7xbuoQCjMjkBjRD3EPBX9FaL7Ulo5Tu9m6sp8wHhJL73IERnq91vDHPa5fs-DDfGJ-gJGSQA8VzhXAFy9fys_cLSyibw36Ztu5gdJvOulV6qPjPSXTpCumi4nzjZB5CsiIiDGjASbFEJBeN2wC5iGO1nBwcBXs9AlYjZ9grwMQe9nXC81S6aTU39Xs2Lpa-TCe_V0y_7Ud565Y8QqMmnLW5Q2tJp4J0U2OZT6MmNxkLPZ1VJp6bCUnP7pNNRdLJv9a1nGgEWpZaPfZrEmzRPcquNUanPCCKIxKOZpJaKbDJpM3Q1J66I5AGSa0OyUvRjawFena7ww
POSTGRES_HOST=127.0.0.1
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=docker
POSTGRES_DATABASE=w2bitback
MODE=DEV
RUN_MIGRATIONS=false
```

## Instalação

```bash
$ yarn install
```

## Migrations

```bash
$ yarn typeorm migration:run
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Swagger
 - O Swagger está configurado na rota `/documentation`
