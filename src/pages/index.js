import styles from './index.css';
import React from 'react';
import { Button } from 'antd';
import Link from 'umi/link';
import { LoadingView } from '../pages/Component/common/model'

export default function () {
  return (
    <div>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <Button type="primary">Button</Button>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
          <Link to="./home">Go to list page</Link>
          哈哈哈哈
         <LoadingView></LoadingView>
        </li>
      </ul>
    </div>
  );
}
