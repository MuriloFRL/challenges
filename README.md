# Desafio Backend Node.js

O objetivo do exercício é verificar sua familiaridade com Nodejs, lógica e organização do código

Boa sorte e obrigado por participar!

## Sobre o desafio

Nesse desafio, queremos uma API (GET) que nos forneça os horários disponíveis de 30 em 30 minutos na agenda da loja <br>
_obs: não é o horário por profissional, são os horários disponíveis da loja_

Para isso criamos uma API:

- Consulta de profissional: https://api-homolog.geracaopet.com.br/api/challenges/challenge1/employees <br>
Retorna os profissionais e horário de trabalho.

- Consulta de agendamentos: https://api-homolog.geracaopet.com.br/api/challenges/challenge1/employee/{id-do-profissional}/appointments. <br>
Retorna os agendamentos que cada profissional já tem no dia.


O retorno esperado são os horários livres ainda na loja, deve ser algo como:

```
availableTimes: ["08:00", "08:30", "09:00, "10:00", ...]
```


## Entrega do Projeto
- Vamos focar em avaliar o que foi proposto para o exercício, mas se não conseguir conter sua criatividade e quiser incrementar a aplicação, fique à vontade. Só não deixe de entregar o essencial. ;)
- Ao finalizar, suba a sua proposta para o projeto que você criou no GitHub ou use o https://www.anyfiddle.com/start/
- Envie-nos o link do projeto.


 ##### Pronto! Basta aguardar que vamos entrar em contato


## Inicialização
```
npm install
npm run start
```

## Request Exemplo
```
curl --location --request GET 'http://localhost:3000/get-vacant-appointments'
```
## Postman collection
```
http://localhost:3000/get-vacant-appointments
```
