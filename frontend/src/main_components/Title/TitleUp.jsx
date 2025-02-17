import s from "./styles.module.css";

const TitleUp = ({ content }) => {
  return (
    <main className={s.ContainerTitle}>
      <span className={s.LeftLine}></span>
      <div className={s.Title}>{content}</div>
      <span className={s.RightLine}></span>
    </main>
  );
};
export default TitleUp;
