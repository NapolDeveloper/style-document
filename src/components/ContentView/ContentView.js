import React, { useContext } from 'react';

// md
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

import styled from 'styled-components';

// store
import { MdContext } from '../../store/MdStore';

// styles
const MarkDownStyle = styled.div`
  font-size: 1rem;
  color: red;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const ContentTitle = styled.div`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 50px;
`;

const ContentView = () => {
  return (
    <div>
      <ContentBox />
    </div>
  );
};

const BlockQuoteStyle = styled.blockquote`
  padding: 1rem;
  border: 1px dashed black;
`;
function BlockQuote() {
  return <BlockQuoteStyle></BlockQuoteStyle>;
}

const ContentBox = () => {
  const mdContext = useContext(MdContext);
  const { renderingMd, renderingTitle } = mdContext;
  const markdown = renderingMd;
  return (
    <ContentContainer>
      <ContentTitle>{renderingTitle}</ContentTitle>
      <MarkDownStyle>
        {/* rendering 버그가 있는데 initial list 가 아닌 추가한 list는 정상작동 */}
        {/* <ReactMarkdown components={components} children={markdown} /> */}
        <ReactMarkdown components={components} children={markdown} />
      </MarkDownStyle>
    </ContentContainer>
  );
};

// const markdown = `Here is some JavaScript code:

// ~~~js
// console.log('It works!')
// ~~~
// `;
const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter style={prism} language={match[1]} PreTag='div' children={String(children).replace(/\n$/, '')} {...props} />
    ) : (
      <code className={className} {...props} />
    );
  }
};

export default ContentView;
