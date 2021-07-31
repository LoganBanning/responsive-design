import './NavBar.css'

const NavBar = ({ links, toggleMenu, isMenuOpen }) => {
  const menuClass = isMenuOpen ? 'menu-open' : '';

  return (
    <div>
      <nav>
        <h1>Start Bootstrap</h1>
        <ul>
          {links.map(link => <li>{link}</li>)}
        </ul>
        <button className='menu-btn' onClick={toggleMenu}>MENU</button>
      </nav>
      <menu className={menuClass}>
        <h1 className={isMenuOpen ? 'menu-text' : 'hidden'}>
          Start Bootstrap
        </h1>
        <button className={isMenuOpen ? 'open-menu-btn' : 'hidden'} onClick={toggleMenu}>MENU</button>
        <ul className={isMenuOpen ? 'menu-text' : 'hidden'}>
          {links.map(link => <li>{link}</li>)}
        </ul>
      </menu>
    </div>
  )
}

export default NavBar;