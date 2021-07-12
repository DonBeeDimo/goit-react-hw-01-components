import PropTypes from 'prop-types';

export default function Statistics({ title, label, percentage }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        <li className="item">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
        <li className="item">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
        <li className="item">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
        <li className="item">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.string,
};
