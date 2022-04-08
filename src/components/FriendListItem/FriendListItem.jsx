import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

const FriendListItem = ({ friend }) => {
  return (
    <li className={s.item}>
      <span className={friend.isOnline ? s.online : s.offline}></span>
      <img src={friend.avatar} alt="User avatar" width="48" />
      <p className={s.name}>{friend.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FriendListItem;
