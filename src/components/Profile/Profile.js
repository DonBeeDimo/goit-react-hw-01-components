import PropTypes from 'prop-types';
import defaultImage from './default.jpg';
import s from './Profile.module.css';

export default function Profile({
  src = defaultImage,
  name,
  tag,
  location,
  stats,
  // followers,
  // views,
  // likes,
}) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={src} alt="Аватар пользователя" className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.item}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object,
  // followers: PropTypes.number.isRequired,
  // views: PropTypes.number.isRequired,
  // likes: PropTypes.number.isRequired,
};
