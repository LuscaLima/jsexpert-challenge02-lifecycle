Francisco Lucas Lima Nunes

# Story: Entendendo conceitos fundamentais do ciclo de vida do Javascript

A idéia é implementar códigos pensando no comportamento do Javascript com base no `JS Expect - Módulo 03`, que trata de `Conceitos fundamentais sobre o ciclo de vida do Javascript`.

Baseando-se nos testes automatizados já criados neste repo - similares aos feitos no [Desafio Anterior](https://github.com/training-erickwendel/jsexpert-exercicio01-pokeapi) -, implemente o código em cada uma das services existentes.

## Funcionalidades

### Requisitos

1. Implemente os métodos marcados com um `//@TODO: comment` em cada uma das respectivas services,
   na ordem que preferir:

- [x] _services/StatementsService_
- [x] _services/WeirdMathService_
- [x] _services/ReferencesService_
- [x] _services/ObjectMethodsService_

2. Remova os `//@TODO: comments` de cada função implementada, e garanta que os testes referentes à essa função estejam funcionando.

### Extras

- [x] Desafio opcional: Note que no arquivo `test/unit/service/ReferencesService.test`, existe um teste na linha 44 com um `it.skip()`. Esse é um desafio opcional, e caso queira implementá-lo é só remover o `.skip` e implementar a respectiva função que está sendo testada na ReferencesService

### Arquitetura e onde trabalhar

```
project
│   README.md
│   package.json
│
└───src
│   │
│   └───service
│       │   ObjectMethodsService.js     // EDIT HERE !
│       │   ReferencesService.js        // EDIT HERE !
│       │   StatementsService.js        // EDIT HERE !
│       │   WeirdMathService.js         // EDIT HERE !
│
└───test
│   │
│   └───unit/service
│       │   ObjectMethodsService.js     // DO *NOT* EDIT HERE !
│       │   ReferencesService.js        // DO *NOT* EDIT HERE !
│       │   StatementsService.js        // DO *NOT* EDIT HERE !
│       │   WeirdMathService.js         // DO *NOT* EDIT HERE !
│
```

### Checklist features

- ObjectMethodsService

  - [x] Deve entender Coerção de tipos e Objects Lifecycle e implementar soluções usando `valueOf`, `toString` e `[Symbol.toPrimitive]`.

- ReferencesService

  - [x] Deve entender tipos de referência e Mutability vs Immutability, e implementar soluções copiando ou não referências de objetos.

- StatementsService

  - [x] Deve entender o uso de conditional statements no Javascript e seus respectivos retornos em diferentes cenários.

- WeirdMathService
  - [x] Deve entender o fluxo de vida do Javascript e as coerções implícitas que ocorrem em expressões matemáticas.
