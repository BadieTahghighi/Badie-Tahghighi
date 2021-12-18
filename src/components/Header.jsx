/* eslint-disable no-restricted-globals */
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBasketballBall } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


export default function Header() {

    const transition = '0.5s';

    const styles = {
        iconButton: {
            borderRadius: '100%',
            transition: transition,
        },
        active: {
            backgroundColor: '#fff',
            color: '#000',
            transition: transition,
        },
        inactive: {
            transition: transition,
        },
    };

    const loc = location.pathname;

    return (
        <div className="bg-black px-24 flex flex-row justify-between items-center">
            <div className="py-5">
                <Link to="/" className="text-white text-3xl">ENFOLD<small className="text-gray-400 text-xs">PROFTFILIO</small></Link>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-row mx-4">
                    <div style={loc === '/' ? styles.active : styles.inactive} className="h-full flex items-center px-5 font-semibold text-white hover:text-black hover:bg-white">
                        <Link to="/">
                            <span>Home</span>
                        </Link>
                    </div>
                    <div style={loc === '/about' ? styles.active : styles.inactive} className="h-full flex items-center px-5 font-semibold text-white hover:text-black hover:bg-white">
                        <Link to="/about">
                            <span>About</span>
                        </Link>
                    </div>
                    <div style={loc === '/blog' ? styles.active : styles.inactive} className="h-full flex items-center px-5 font-semibold text-white hover:text-black hover:bg-white">
                        <Link to="/blog">
                            <span>Blog</span>
                        </Link>
                    </div>
                    <div style={loc === '/contact' ? styles.active : styles.inactive} className="h-full flex items-center px-5 font-semibold text-white hover:text-black hover:bg-white">
                        <Link to="/contact">
                            <span>Contact</span>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row items-center text-white text-base py-5">
                    <button style={styles.iconButton} className="hover:bg-blue-400 px-2 py-1">
                        <FontAwesomeIcon icon={faTwitter} />
                    </button>
                    <button style={styles.iconButton} className="hover:bg-pink-500 px-2 py-1">
                        <FontAwesomeIcon icon={faBasketballBall} />
                    </button>
                    <button style={styles.iconButton} className="hover:bg-red-400 px-2 py-1">
                        <FontAwesomeIcon icon={faInstagram} />
                    </button>
                </div>
            </div>
        </div>
    )
}