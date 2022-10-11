import Table from 'components/general/keyValueTable';
import { TKeyValue } from 'interfaces/TKeyValue';
import Layout from 'components/general/layout';
import { getHourData } from 'utils/protimeData';

const CalculatorIndex = ({ hours }: { hours: TKeyValue[] }) => {
  return (
    <Layout>
      <Table keyValues={hours} />
    </Layout>
  );
};

export async function getStaticProps() {
  const hours = getHourData();
  console.log('getStaticProps', hours);

  return {
    props: { hours },
  };
}

export default CalculatorIndex;
