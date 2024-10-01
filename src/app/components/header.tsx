import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <nav className="navbar header">
            <div className="container">
                <Link className="navbar-brand" href="/">
                    <Image className='img-fluid' src="/images/meganbytes_logo.png" width={170} height={50} alt='meghanbytes' priority />
                </Link>

                <button className='header__menu-btn'>
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <ul className='header__nav-container nav mb-2'>
                    <li className='nav-item '>
                        <Link className='header__nav-item nav-link' href="/about-us">About Us</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='header__nav-item nav-link' href="">Projects</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='header__nav-item nav-link' href="">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}