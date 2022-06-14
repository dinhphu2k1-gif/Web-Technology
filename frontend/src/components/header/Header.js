import { useEffect, useState } from 'react';
import './Header.css';
import { Menu } from '../user/menu/Menu';
import { Bar } from './Bar';

export function Header() {

    const [show, isShowed] = useState(false)

    useEffect(() => {
        let toggle = document.getElementById('header_toggle')
        let navigation = document.getElementById('header_navigation')

        const togglehandler = () => {
            toggle.classList.toggle('header-active')
            navigation.classList.toggle('header-active')
        }

        toggle.addEventListener('click', togglehandler)

        return () => {
            toggle.removeEventListener('click', togglehandler)
        }
    }, [])

    return (
        <header>
            <div className="header-logo">XE SANG REP 1:1</div>
            <a className="header-toggle" id="header_toggle" onClick={() => isShowed(!show)}></a>
            <div className="header-navigation" id='header_navigation' >
                <Menu/>
                <Bar/>
            </div>
        </header>
    )
}