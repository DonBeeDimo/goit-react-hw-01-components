import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function SectionSt({ title, children }) {
  return (
    <div className={s.section}>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </div>
  );
}

SectionSt.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
