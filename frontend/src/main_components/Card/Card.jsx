const Card = ({ img, title, link }) => {
  return (
    <main className="rounded-xl p-6 shadow-md bg-colorBgCard">
      <img className="rounded-xl" src={img} alt="" />
      <div className="mt-5 text-md text-colorText">{title}</div>
      <p className="mt-1 text-colorLinkDark">{link}</p>
    </main>
  );
};
export default Card;
