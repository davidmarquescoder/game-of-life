# Game of Life

Este é um simples jogo da vida implementado em JavaScript, HTML e CSS.

## Descrição

O Jogo da Vida é um autômato celular desenvolvido por John Horton Conway em 1970. Ele é um exemplo clássico de um sistema discreto que gera padrões complexos através de regras simples. Este projeto implementa uma versão do Jogo da Vida em um ambiente web.

## Instalação

Não é necessária nenhuma instalação para utilizar este projeto. Basta abrir o arquivo `index.html` em um navegador web.
Porém para realizar o testes do jest é necessário instalar as dependências, rode o comando:

- npm install

## Como Jogar

- Clique no botão "▶️ Start" para iniciar o jogo.
- Clique no botão "⏸️ Stop" para pausar o jogo.
- Clique no botão "🔄 Restart" para reiniciar o jogo.

## Estrutura do Projeto

- **index.html**: Arquivo HTML principal que contém a estrutura da página web.
- **css/style.css**: Arquivo CSS responsável pelo estilo visual da aplicação.
- **js/main.js**: Arquivo JavaScript que controla a lógica do jogo e interação com o usuário.
- **js/grid.js**: Arquivo JavaScript que contém funções relacionadas à criação e manipulação do grid do jogo.
- **js/count.js**: Arquivo JavaScript que contém funções para contar células e vizinhos no grid.
- **tests/count.test.js**: Arquivo de teste para as funções de contagem.
- **tests/grid.test.js**: Arquivo de teste para as funções relacionadas ao grid.
- **.babelrc**: Configurações do Babel para transpilação do código JavaScript.
- **.editorconfig**: Configurações de formatação de código.
- **.gitignore**: Arquivo de configuração do Git para ignorar arquivos e diretórios específicos.
- **LICENSE**: Licença do projeto (MIT License).
- **package.json**: Arquivo de manifesto do projeto com informações sobre dependências e configurações do Jest.

## Como Contribuir

Contribuições são bem-vindas! Se você quiser contribuir com este projeto, siga estas etapas:

1. Fork este repositório.
2. Crie uma branch com a sua feature: `git checkout -b feature/nova-feature`.
3. Faça commit das suas mudanças: `git commit -m 'Adiciona nova feature'`.
4. Faça push para a branch: `git push origin feature/nova-feature`.
5. Abra um Pull Request.

## Testes

Os testes são escritos utilizando o framework Jest e estão localizados nos arquivos `tests/count.test.js` e `tests/grid.test.js`. Para executar os testes, você pode utilizar o comando:

Rode esse comando na pasta raiz do projeto:

- npx jest

## Autor

Este projeto foi desenvolvido por [David Marques](https://github.com/davidmarquescoder).

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
