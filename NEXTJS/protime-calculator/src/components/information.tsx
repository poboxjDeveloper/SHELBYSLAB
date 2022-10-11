import { NextRouter, useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import styles from './information.module.scss';
import { TKeyValue } from '../interfaces/TKeyValue';

const _routerInfo = (
  messages: Array<TKeyValue>,
  router: NextRouter
): Array<TKeyValue> => {
  const routeValues: TKeyValue[] = [
    { key: 'query', value: JSON.stringify(router.query) },
    { key: 'pathname', value: router.pathname },
    { key: 'href', value: router.asPath },
    { key: 'fallback mode', value: router.isFallback.toString() },
    { key: 'locale', value: router.locale ? router.locale : '' },
    { key: 'locales', value: JSON.stringify(router.locales) },
    {
      key: 'defaultLocale',
      value: router.defaultLocale ? router.defaultLocale : '',
    },
    { key: 'domainLocales', value: JSON.stringify(router.domainLocales) },
    { key: 'isReady', value: router.isReady.toString() },
    { key: 'isPreview', value: router.isPreview.toString() },
  ];

  messages.push(...routeValues);
  return messages;
};

const _messageTableRow = (message: TKeyValue) => {
  return (
    <tr key={'info' + message.key + message.value}>
      <th scope="row">{message.key}</th>
      <td>{message.value}</td>
    </tr>
  );
};

const Information = ({ messages }: { messages?: TKeyValue[] }) => {
  if (messages === undefined) messages = [];

  const messagesRef = useRef<TKeyValue[]>(messages);

  let children: Array<JSX.Element> = [];
  messagesRef.current.forEach((m: TKeyValue) => {
    children.push(_messageTableRow(m));
  });

  return (
    <div className={styles.module}>
      <table cellPadding={1} cellSpacing={0} className={styles.table}>
        <thead key={'table-head'}>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default Information;
