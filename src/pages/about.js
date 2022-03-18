import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Layout from '../components/layout';

const Heading = styled.h2`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteDescription
        }
      }
    }
  `);

  return (
    <Layout pageTitle="關於我">
      <Heading>🍔 About Me | 關於我</Heading>
      <p>
        前端工程師，喜歡 San-X
        的まめゴマ、旅遊和吃美食，這裡紀錄了我的學習和開發筆記。
      </p>
      <ul>
        <li>暱稱：海豹人</li>
        <li>描述：你不需要很厲害才能開始，但你需要開始才會很厲害</li>
        <li>狀態：前端菜鳥一枚</li>
        <li>專業：前端開發與資訊管理</li>
        <li>信箱：castle2668@gmail.com</li>
      </ul>
      <h2>🏡 About Blog | 關於部落格</h2>
      <p>
        本部落格名稱改編自史萊姆的第一個家，是海豹人的童年回憶，從創立至今都有持續更新，希望我也能一直更新，持續地精進自己。
      </p>
      <p>
        這個部落格主要用來紀錄我學習和開發的筆記，同時也能檢視自己對技能的理解。
        <br />
        歡迎大家交流 (\*´∀`)~♥
      </p>
      <ul>
        <li>網站名稱：海豹人的第一個家</li>
        <li>網站類型：部落格</li>
        <li>網站描述：{data.site.siteMetadata.siteDescription}</li>
        <li>網站網址：https://blog.sealman.tw</li>
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
