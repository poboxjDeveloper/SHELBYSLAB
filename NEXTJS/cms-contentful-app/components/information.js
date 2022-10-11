const Information = ({ props }) => {
  const environment = process.env.NODE_ENV;
  const message = environment === 'development' ? 'DEV' : 'PROD';
  const { CONTENTFUL_SPACE_ID, CONTENTFUL_MANAGEMENT_TOKEN } = process.env;

  return (
    <>
      <pre>
        <strong>Information: {message}</strong>
        <br />
        CONTENTFUL_SPACE_ID: {CONTENTFUL_SPACE_ID}
        <br />
        CONTENTFUL_MANAGEMENT_TOKEN: {CONTENTFUL_MANAGEMENT_TOKEN}
        <br />
        REACT_APP_MY_SPECIAL_KEY:{process.env.REACT_APP_MY_SPECIAL_KEY}
        <br />
        NODE_ENV : {process.env.NODE_ENV}
        <br />
        Props: {props.env}
        <br />
        {process.env.REACT_APP_TITLE}
        <br />
        {process.env.REACT_APP_DESCRIPTION}
      </pre>
    </>
  );
};

export default Information;
