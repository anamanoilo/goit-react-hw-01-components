import s from './TransactionHistoryItem.module.css';
import PropTypes from 'prop-types';

const TransactionHistoryItem = ({ item }) => {
  return (
    <tr className={s.row} key={item.id}>
      <td className={`${s.type} ${s.tableData}`}>{item.type}</td>
      <td className={s.tableData}>{item.amount}</td>
      <td className={s.tableData}>{item.currency}</td>
    </tr>
  );
};

TransactionHistoryItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};

export default TransactionHistoryItem;
