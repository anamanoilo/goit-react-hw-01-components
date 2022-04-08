import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section>
      <div className={s.statisticsWrapper}>
        {title && <h2 className={s.title}>{title}</h2>}

        <ul className={s.statList}>
          {stats.map(({ id, label, percentage }) => {
            const randomColor = '#000000'.replace(/0/g, function () {
              return (~~(Math.random() * 16)).toString(16);
            });
            return (
              <li
                className={s.item}
                key={id}
                style={{
                  backgroundColor: randomColor,
                }}
              >
                <span className={s.label}>{label}</span>
                <span className="percentage">{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
