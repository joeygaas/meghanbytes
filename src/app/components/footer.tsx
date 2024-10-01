import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer d-flex justify-content-center">
            <ul className="nav">
                <li className='nav-item '>
                    <Link className='footer__nav nav-link' href="">Home</Link>
                </li>
                <li className='nav-item '>
                    <Link className='footer__nav nav-link' href="">About Us</Link>
                </li>
                <li className='nav-item'>
                    <Link className='footer__nav nav-link' href="">Projects</Link>
                </li>
                <li className='nav-item'>
                    <Link className='footer__nav nav-link' href="">Contact Us</Link>
                </li>
            </ul>
        </footer>
    );
}