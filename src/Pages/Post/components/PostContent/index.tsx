/* eslint-disable react/no-children-prop */
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeRaw from 'rehype-raw';

import { PostContentContainer } from './style';

const markdown = `
<h1 align="center">
<img alig src="https://github.com/rnatu/coffee-delivery/raw/main/src/assets/intro-imagem.svg" width=500 alt="Coffee Delivery Logo">
</h1>

<h3 align="center">
  Criando uma cafeteria fictícia com ReactJS/Typescript
</h3>

<p align="center">
  <a href="https://www.linkedin.com/in/rnatu/">
    <img alt="Made By" src="https://img.shields.io/static/v1?label=Made%20By&message=Renato%20Xavier&color=3667B3&style=for-the-badge">
  </a>
</p>

<p align="center">
Desenvolvi uma aplicação para gerenciar um carrinho de compras de uma cafeteria fictícia do zero, utilizando ReactJS e TypeScript como base.
</p>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias-utilizadas">Tecnologias utilizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Como-utilizar">Como utilizar</a>
</p>

<h3 align="center">
  Acesse a aplicação pelo link abaixo<br />
   <font size="4">
   <a  href="https://exquisite-stroopwafel-262dd1.netlify.app">
  https://exquisite-stroopwafel-262dd1.netlify.app
  </a>
  </font>
</h3>

## 📜 Sobre o projeto

O principal objetivo desta aplicação é gerenciar um carrinho de compras, criando a interface através de um layout previamente construído, buscando deixar o mais próximo possível e funcional.

<p align="center">
  <img alig src="#" width=450 alt="Coffee Delivery Logo">
</p>

### Principais funcionalidades implementadas

- Listagem de produtos (cafés) disponíveis para compra
- Adicionar uma quantidade específicas de itens no carrinho
- Aumentar ou remover a quantidade de itens no carrinho
- Formulário para o usuário preencher o seu endereço
- Exibir o total de itens no carrinho no Header
- Exibir o valor total da soma de itens no carrinho multiplicados pelo valor

#### Funcionalidades Adicionais

- Filtro de cafés por tag
- Validação para exibição de rotas

#### Conceitos

- Estados
- ContextAPI
- Reducer
- LocalStorage
- Imutabilidade do estado
- Listas e chaves no ReactJS
- Propriedades
- Componentização

## 🚀 Tecnologias utilizadas

- [ReactJS](https://pt-br.reactjs.org/)
  - [styled-components](https://styled-components.com/)
  - [phosphor-icons](https://phosphoricons.com/)
  - [immer](https://immerjs.github.io/immer/)
  - [React Hook Form](https://react-hook-form.com/)
  - [zod Validations](https://zod.dev/)
  - [react-router-dom](https://reactrouter.com/en/main)
  - [uuid](https://github.com/uuidjs/uuid)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

Code formatter:

- [esLint](https://eslint.org/)

## ⚡ Como utilizar

### Instalando Dependências

\`\`\`javascript
let foo = 42;   // foo is now a number
foo = ‘bar’;    // foo is now a string
foo = true;     // foo is now a boolean
\`\`\`


\`\`\`bash
    # Instalar as dependências
    $ npm i
\`\`\`

### Iniciando aplicação

\`\`\`bash
    # Iniciando aplicação
    $ npm run dev

    # A aplicação será aberta na porta: 3000 - Basta acessar: http://localhost:5173/
\`\`\`

<h4 align="center">
    Made with 💜 by Renato Xavier
</h4>
`;

export function PostContent() {
  // Renderiza o conteúdo markdown usando ReactMarkdown e estiliza conteúdo em códigos de programação com o SyntaxHighlighter
  return (
    <PostContentContainer>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        children={markdown}
        components={{
          code({ node, inline, className, children, ...props }) {
            // Verifica se o código deve ser destacado
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              // Renderiza o código com SyntaxHighlighter
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={vscDarkPlus as any}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              // Renderiza o código inline
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </PostContentContainer>
  );
}
