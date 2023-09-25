import css from './Statistics.module.css';

export const Statistics = ({
  title,
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => {
  return (
    <ul className={css.statisticsList}>
      {title && <p className={css.feedbackHeader}>{title}</p>}
      <li className={css.statisticsItem}>
        <p className={css.feedbackText}>Good:</p>
        <span className={css.feedbackSpan}>{good}</span>
      </li>
      <li className={css.statisticsItem}>
        <p className={css.feedbackText}>Neutral:</p>
        <span className={css.feedbackSpan}>{neutral}</span>
      </li>
      <li className={css.statisticsItem}>
        <p className={css.feedbackText}>Bad:</p>
        <span className={css.feedbackSpan}>{bad}</span>
      </li>
      <li className={css.statisticsItem}>
        <p className={css.feedbackText}>Total:</p>
        <span className={css.feedbackSpan}>{total}</span>
      </li>
      <li className={css.statisticsItem}>
        <p className={css.feedbackText}>Positive Feedback:</p>
        <span className={css.feedbackSpan}>{positiveFeedbackPercentage}%</span>
      </li>
    </ul>
  );
};
