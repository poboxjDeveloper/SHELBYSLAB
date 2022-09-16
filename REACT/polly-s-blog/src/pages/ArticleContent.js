const ArticleContent = (args) => {
  console.log('this is the args object:', args);
  if (args) return <p>{args.paragraph}</p>;
  else return '';
};

export default ArticleContent;
