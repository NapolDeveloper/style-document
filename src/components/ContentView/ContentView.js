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
  color: black;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
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
        <ReactMarkdown components={components} children={markdown} remarkPlugins={[[gfm]]} />
      </MarkDownStyle>
    </ContentContainer>
  );
};

/* test용 데이터
### な형용사의 명사 수식

> [ 문법 ] > 
**< な형용사의 어간 + な + 명사 >**
> '~한 ~(명사)'

#### 예시 문장
- 変な会社ですね。 (이상한 회사네요)
  - 変だ(へんだ) : 이상하다
  - 会社(かいしゃ) : 회사
- こちは有名な場所です。 (여기는 유명한 장소입니다)
  - 有名だ(ゆうめいだ) : 유명하다
  - 場所(ばしょ) : 장소
  
### な형용사의 연결
> [ 문법 ] > 
**< な형용사의 어간 + で >**
> '~하고, ~해서'

#### 예시 문장
- 彼は笑顔が素敵でかっこいいです。 (그는 미소가 멋지고 잘생겼습니다)
  - 笑顔(えがお) : 웃는 얼굴
  - かっこいい : 잘생겼단ㅌ
  
#### 공부하면서 추가로 배운 표현
- ~なんかありません : ~같은 거/따위 없어요 | 앞에는 명사가 온다
  - お金なんかありません。 (돈 같은 거 없어요)
- うち : 우리 | 자신이 소속한 조직, 단체 등을 나타내는 표현
- とにかく : 하여간, 어쨋든
  - とにかくねむい。 (어쨋든 졸려요..)
- ~がほしいです : ~을/를 원합니다, 갖고 싶습니다
  - この人形がほしいです。 (이 인형을 가지고 싶습니다)
  
  */

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
