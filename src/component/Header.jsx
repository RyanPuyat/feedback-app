import { Header_Title } from '../constant/Head';

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <h2>{Header_Title}</h2>
        </div>
      </header>
    </>
  );
};

export default Header;
