<h1 align="center">
<img alig src="./src/assets/logo.svg" width=300 alt="Github Blog">
</h1>

<h3 align="center">
  Criando um blog pessoal com ReactJS/Typescript
</h3>

<p align="center">
  <a href="https://www.linkedin.com/in/rnatu/">
    <img alt="Made By" src="https://img.shields.io/static/v1?label=Made%20By&message=Renato%20Xavier&color=3667B3&style=for-the-badge">
  </a>
</p>

<p align="center">
Desenvolvi uma aplicação que faz uso da API do Github para criar um blog pessoal do zero, utilizando ReactJS e TypeScript como base.
</p>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias-utilizadas">Tecnologias utilizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Como-utilizar">Como utilizar</a>
</p>

<h3 align="center">
  Acesse a aplicação pelo link abaixo<br />
   <a href="https://snazzy-macaron-beb63c.netlify.app" style="font-size: 1.25rem;">
    https://snazzy-macaron-beb63c.netlify.app
  </a>
</h3>

## 📜 Sobre o projeto

O principal objetivo desta aplicação é utilizar a API do GitHub para buscar issues de um repositório específico e exibi-las como posts na página inicial do blog. Além disso, os dados do meu perfil serão integrados ao blog para compor a página inicial.

<p align="center">
  <img alig src="./public/demonstration.png" width=450 alt="Github Blog demonstration">
</p>

### Principais funcionalidades implementadas

- Listagem do seu perfil com imagem, número de seguidores, nome e outras informações disponíveis pela API do GitHub.
- Listar e filtrar todas as issues do repositório com um pequeno resumo do conteúdo dela
- Criar uma página para exibir um post (issue) completo

#### Funcionalidades Adicionais

- Busca de issues pelo titulo
- Contagem de posts integrado com a busca
- Componente Not Found

#### Conceitos

- Estados
- Imutabilidade do estado
- Listas e chaves no ReactJS
- Propriedades
- Componentização
- Fetch / Axios
- Roteamento e React Router DOM
- Formulários

## 🚀 Tecnologias utilizadas

- [ReactJS](https://pt-br.reactjs.org/)
  - [styled-components](https://styled-components.com/)
  - [fortawesome-icons](https://fontawesome.com/icons)
  - [moment](https://momentjs.com/)
  - [react-markdown](https://github.com/remarkjs/react-markdown) + [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) + [rehype-raw](https://github.com/rehypejs/rehype-raw)
  - [react-router-dom](https://reactrouter.com/en/main)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

Code formatter:

- [esLintRocketseat with prettier](https://github.com/Rocketseat/eslint-config-rocketseat)

## ⚡ Como utilizar

### Instalando Dependências

```bash
    # Instalar as dependências
    $ npm i
```

### Iniciando aplicação

```bash
    # Iniciando aplicação
    $ npm run dev

    # A aplicação será aberta na porta:5173 - Basta acessar: http://localhost:5173/
```

<h4 align="center">
    Made with 💜 by Renato Xavier
</h4>
