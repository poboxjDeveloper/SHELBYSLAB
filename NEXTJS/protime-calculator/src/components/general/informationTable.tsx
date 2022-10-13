import { TKeyValue } from 'interfaces/TKeyValue';
import { useRef } from 'react';
import styles from './informationTable.module.scss';

const _messageTableRow = (message: TKeyValue) => {
  return (
    <tr key={'info' + message.key + message.value}>
      <th scope="row" className={styles.title}>
        {message.key}
      </th>
      <td>{message.value}</td>
    </tr>
  );
};

const InformationTable = ({
  headers,
  messages,
}: {
  headers?: string[];
  messages?: TKeyValue[];
}) => {
  if (messages === undefined) messages = [];

  const messagesRef = useRef<TKeyValue[]>(messages);

  let tableRows: Array<JSX.Element> = [];
  messagesRef.current.forEach((m: TKeyValue) => {
    tableRows.push(_messageTableRow(m));
  });

  let thOne = headers ? (headers.length > 0 ? headers[0] : '') : '';
  let thTwo = headers ? (headers.length > 1 ? headers[1] : '') : '';

  return (
    <div className={styles.module}>
      <table cellPadding={1} cellSpacing={0} className={styles.table}>
        <thead key={'table-head'}>
          <tr>
            <th>{thOne}</th>
            <th>{thTwo}</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
};

export default InformationTable;
