/* eslint-disable react/no-children-prop */
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeRaw from 'rehype-raw';

import { PostContentContainer } from './style';

interface PostContentProps {
  content: string;
}

export function PostContent({ content }: PostContentProps) {
  // Renderiza o conteúdo markdown usando ReactMarkdown e estiliza conteúdo em códigos de programação com o SyntaxHighlighter
  return (
    <PostContentContainer>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        children={content}
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
