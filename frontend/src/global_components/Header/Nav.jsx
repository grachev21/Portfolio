import LinkLight from "../../main_components/Links/LinkLight";

const Nav = ({menu}) => {
  return (
    <main className="tablet:flex flex-row hidden">
      {menu.map((value, index) => {
        return (
          <div key={index} className="mx-4">
            <LinkLight link={value} />
          </div>
        );
      })}
    </main>
  );
};
export default Nav;
