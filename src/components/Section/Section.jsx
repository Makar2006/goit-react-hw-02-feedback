import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={css.mainSection}>
      <h2 className={css.mainTitle}>{title}</h2>
      {children}
    </section>
  );
};
