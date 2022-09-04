import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Layout from '../components/layout';
import Seo from '../components/seo';

const Heading = styled.h2`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
        }
      }
    }
  `);

  return (
    <Layout>
      <Seo title="關於我" pathname="about" />
      <Heading>🍔 About Me | 關於我</Heading>
      <p>
        I'm a Front End Developer who shares programming goodness with the
        community 🍁
      </p>
      <ul>
        <li>暱稱：Sean Huang aka Sealman</li>
        <li>描述：烏龜慢慢爬也是爬，學得下去比較重要！</li>
        <li>狀態：前端菜鳥一枚</li>
        <li>專業：前端開發與資訊管理</li>
        <li>信箱：castle2668@gmail.com</li>
      </ul>
      <h2>🏡 About Blog | 關於部落格</h2>
      <p>
        本部落格名稱改編自史萊姆的第一個家，是海豹人的童年回憶，而且從創立至今都有持續更新，希望我也能不斷更新，持續地精進自己。
      </p>
      <p>
        這個部落格主要是用來紀錄我學習與開發的筆記，同時檢視自己對技能的理解。
        <br />
        歡迎大家交流 (\*´∀`)~♥
      </p>
      <ul>
        <li>網站名稱：海豹人的第一個家</li>
        <li>網站類型：部落格</li>
        <li>網站描述：{data.site.siteMetadata.description}</li>
        <li>網站網址：https://www.sealman.tw</li>
        <li>網站狀態：持續更新中</li>
      </ul>
      <h2>📎 License | 授權</h2>
      <p>
        本部落格是採用創用 CC 姓名標示 - 非商業性 - 相同方式分享 4.0
        國際授權條款授權。
      </p>
      <a
        href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
        title="CC BY-NC-SA 4.0"
      >
        <StaticImage
          src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
          alt="CC BY-NC-SA 4.0"
        />
      </a>
    </Layout>
  );
};

export default About;
