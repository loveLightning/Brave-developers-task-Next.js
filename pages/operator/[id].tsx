import { Operator } from '../../components/Operator'

export async function getServerSideProps({ params }: any) {
  return {
    props: {},
  };
}

const OperatorPage: React.FC = () => {
  return (
    <Operator />
  )
};

export default OperatorPage;
