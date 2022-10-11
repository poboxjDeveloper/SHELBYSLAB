import { TKeyValue } from 'interfaces/TKeyValue';
import css from './keyValueTable.module.scss';

const KeyValueTable = ({ keyValues }: { keyValues: TKeyValue[] }) => {
  return (
    <table>
      <tbody>
        {keyValues.map((kv) => {
          return (
            <tr key={`table-key-${kv.key}`} className={css.row}>
              <th>{kv.key}</th>
              <td>{kv.value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default KeyValueTable;
