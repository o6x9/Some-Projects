import { NavLink } from 'react-router-dom'

function Nav() {
    let menuItems = [
        {
            link: '/',
            text: 'Home'
        },
        {
            link: 'blog',
            text: 'Blog'
        }
    ]

    return (
        <nav className="navbar sticky-top">
            <div id='NAV' className="container">
                <img id='YOUTHINKLOGO' src="https://youthink.la/wp-content/themes/youthinkadult/assets/images/logo.svg" alt="YouThink" />
                <div>
                    <ul>
                        {
                            menuItems.map((menuItem, i) => {
                                return (
                                    <li key={i}>
                                        <NavLink
                                            className={({ isActive }) => {
                                                let classes = 'nav-link'
                                                classes += isActive ? ' active' : ''
                                                return classes
                                            }
                                            } to={menuItem.link}>{menuItem.text}</NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
};
export default Nav
