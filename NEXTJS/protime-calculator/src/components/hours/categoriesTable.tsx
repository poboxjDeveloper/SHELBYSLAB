import { Category } from 'interfaces/Category';
import { EntitlementTableRows } from './entitlementTableRows';
import css from './categoriesTable.module.scss';

const CategoriesTable = ({ categories }: { categories: Array<Category> }) => {
  const children = categories.map((c: Category) => {
    return <EntitlementTableRows key={c.id} data={c.entitlements} />;
  });

  return (
    <>
      <table className={css.table}>
        <tbody>
          <tr>
            <th>Type</th>
            <th>Uren</th>
            <th>Dagen</th>
          </tr>
          {children}
        </tbody>
      </table>
    </>
  );
};

export default CategoriesTable;
