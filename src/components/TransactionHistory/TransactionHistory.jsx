import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';
import TransactionHistoryItem from 'components/TransactionHistoryItem/TransactionHistoryItem';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.tableHead}>
        <tr className={s.row}>
          <th className={s.tableHeader}>Type</th>
          <th className={s.tableHeader}>Amount</th>
          <th className={s.tableHeader}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.tableBody}>
        {items.map(item => (
          <TransactionHistoryItem item={item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
