import React from "react";
import { css } from "emotion";

const ulStyles = css`
  list-style-type: none;
  text-align: center;
  padding: 0;
`;

const textContainer = css`
  max-width: 85%;
  margin: 0 auto;
`;
const containerStyle = css`
  border-bottom: 1px solid #9e9e9e;
  margin-bottom: 30px;
`;

const NewsArticle = props => {
  return (
    <div>
      <ul className={ulStyles}>
        {props.value.map(article => {
          return (
            <li key={article.url}>
              <div className={containerStyle}>
                <img src={article.urlToImage} width="70%" alt={article.title} />
                <div className={textContainer}>
                  <h1>{article.author}</h1>
                  <a href={article.url}>
                    <h3>{article.title}</h3>
                  </a>
                  <h4>{article.content}</h4>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NewsArticle;
