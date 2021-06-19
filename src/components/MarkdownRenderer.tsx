import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Components } from 'react-markdown/src/ast-to-react';
import remarkSlug from 'remark-slug';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const components: Components = {
  code({ inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={a11yDark}
        language={match[1]}
        PreTag="div"
        {...props}>
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

const MarkdownRenderer: React.VFC<{ children: string }> = ({ children }) => {
  return (
    <div>
      <ReactMarkdown plugins={[remarkSlug, remarkGfm]} components={components}>
        {children}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
