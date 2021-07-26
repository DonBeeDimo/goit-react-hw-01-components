import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          <span
            className={s.status}
            style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }}
          >
            {/* {friend.isOnline ? 'Онлайн' : 'Офлайн'} */}
          </span>
          <img className={s.avatar} src={friend.avatar} alt="" width="48" />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
      {/* Произвольное кол-во FriendListItem, в зависимости от кол-ва объектов в массиве */}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
