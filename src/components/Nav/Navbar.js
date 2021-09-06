import { useState, useEffect } from 'react'
import {
    NavContainer,
    NavUL,
    NavA,
    NavIcon
} from "./Navbar.styling"
import { navbarData } from './navbarData';
import * as FaIcons from 'react-icons/fa';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [isActive, setIsActive] = useState({
        activeObject: null,
        objects: navbarData
    });

    useEffect(() => {
        setIsActive({ ...isActive, activeObject: isActive.objects[0] })
    }, [])

    const handleClick = (index) => {
        setIsActive({ ...isActive, activeObject: isActive.objects[index] })
        setNavbar(!navbar)
    }

    const toggleActive = (index) => {
        if (isActive.objects[index] === isActive.activeObject) {
            return "active"
        } else {
            return "inactive"
        }
    }

    return (
        <>
            <NavIcon >
                {navbar ? <FaIcons.FaTimes onClick={() => setNavbar(!navbar)} /> : <FaIcons.FaBars onClick={() => setNavbar(!navbar)} />}
            </NavIcon>
            <NavContainer navbar={navbar}>
                <NavUL>
                    {navbarData.map((item, index) => (
                        <NavA key={index}
                            href={item.path}
                            className={toggleActive(index)}
                            onClick={() => { handleClick(index) }}>
                            {item.title}
                        </NavA>
                    ))}
                </NavUL>
            </NavContainer>
        </>
    )
}

export default Navbar
