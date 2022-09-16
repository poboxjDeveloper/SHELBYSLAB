import { Link } from 'react-router-dom';
import articles from './articles-content';

const ArticleListPage = () => {
  return articles.map((article) => {
    return (
      <Link key={article.name} to={`/articles/${article.name}`}>
        <h1>{article.title}</h1>
        <p>{article.subTitle}</p>
      </Link>
    );
  });
};

export default ArticleListPage;
