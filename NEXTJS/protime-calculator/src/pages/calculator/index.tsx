import Table from 'components/general/keyValueTable';
import { TKeyValue } from 'interfaces/TKeyValue';
import Layout from 'components/general/layout';
import data from 'data/hours.json';

const CalculatorIndex = ({ hours }: { hours: TKeyValue[] }) => {
  return (
    <Layout>
      <Table keyValues={hours} />
    </Layout>
  );
};

export async function getStaticProps() {
  const hours: TKeyValue[] = data.hours as TKeyValue[];
  console.log('getStaticProps', hours, typeof hours);

  return {
    props: { hours },
  };
}

export default CalculatorIndex;
