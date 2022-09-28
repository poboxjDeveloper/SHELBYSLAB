import styles from '../styles/Nested.module.css';
const Nested = ({ children }) => {
  return (
    <div>
      <pre>nested item -&gt; NestedTest.js</pre>
      <div className={styles.block}>
        <h3 className={styles.title}>This should be a title component</h3>
        {children}
      </div>
    </div>
  );
};

export default Nested;
