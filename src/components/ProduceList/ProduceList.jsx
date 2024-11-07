import { useSelector} from 'react-redux';
import ProduceDetails from './ProduceDetails';
import { selectProduceArray } from '../../store/produce';
import './ProduceList.css';

function ProduceList() {
  
  // option 1: without selectProduceArray
  // const produce = useSelector(state => state.produce);
  // const produceArr = Object.values(produce);

  // option 2: with selectProduceArray
  const produceArr = useSelector(selectProduceArray);

  return (
    <>
      <h2>All produce</h2>
      {!produceArr.length && <span>No produce available right now.</span>}
      <ul className="produce-list">
        {produceArr.map((produce) => (
          <ProduceDetails key={produce.id} produce={produce} />
        ))}
      </ul>
    </>
  );
}

export default ProduceList;
