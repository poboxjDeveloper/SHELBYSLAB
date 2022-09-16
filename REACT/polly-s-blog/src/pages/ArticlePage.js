import { useParams } from 'react-router-dom';
import articles from './articles-content';
import ArticleContent from './ArticleContent';

const ArticlePage = () => {
  //   const params = useParams();
  //   const articleId = params.articleId;
  //   const {articleId} = params;
  const { articleId } = useParams(); // object destructuring.
  const article = articles.find((article) => article.name === articleId);

  return (
    <article>
      <pre>articleId: {articleId}</pre>
      <h1>{article.title}</h1>
      <h2>{article.subTitle}</h2>
      {article.content.map((c, ix) => {
        return <ArticleContent key={ix} paragraph={c} />;
      })}
      <p></p>
      <code>{JSON.stringify(article)}</code>
    </article>
  );
};

export default ArticlePage;
