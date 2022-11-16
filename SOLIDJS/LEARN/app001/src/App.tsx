import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Counter from './Counter';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Counter />
    </div>
  );
};

export default App;
