import "./Header.css";

function Header() {
  return (
    <>
      <div className="nav-container">
        <div className="nav-logo">NOTES</div>
        <div className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Enter note</li>
          <li>See Details</li>
          <li>Help</li>
        </div>
      </div>
    </>
  );
}

export default Header;
