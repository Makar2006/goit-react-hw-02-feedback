import css from './Feedback.module.css';

export const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.feedbackList}>
      {options.map(option => {
        return (
          <li className={css.feedbackItem} key={option}>
            <button
              className={css.feedbackButton}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
