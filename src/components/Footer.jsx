import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBasketballBall, faEnvelope, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from "@mui/styles";


export default function Footer() {

    const useStyles = makeStyles({
        input: {
            border: '2px solid black',
            outline: 'none',
        },
        button: {
            border: '2px solid black',
            transition: '0.5s',
        },
    });
    const classes = useStyles();
    return (
        <div className="flex flex-col justify-center mt-36">
            <div className="flex flex-row justify-center gap-6">
                <button className="rounded-full bg-gray-900 text-white py-2 px-3">
                    <FontAwesomeIcon icon={faTwitter} />
                </button>
                <button className="rounded-full bg-gray-900 text-white py-2 px-4">
                    <FontAwesomeIcon icon={faFacebookF} />
                </button>
                <button className="rounded-full bg-gray-900 text-white py-2 px-3">
                    <FontAwesomeIcon icon={faBasketballBall} />
                </button>
                <button className="rounded-full bg-gray-900 text-white py-2 px-3">
                    <FontAwesomeIcon icon={faInstagram} />
                </button>
                <button className="rounded-full bg-gray-900 text-white py-2 px-3">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </button>
                <button className="rounded-full bg-gray-900 text-white py-2 px-3">
                    <FontAwesomeIcon icon={faEnvelope} />
                </button>
            </div>
            <div className="mt-20 flex flex-row justify-center items-center gap-4 mb-8">
                <div style={{ height: '1px' }} className="w-1/12 bg-gray-200" />
                <FontAwesomeIcon icon={faStar} />
                <div style={{ height: '1px' }} className="w-1/12 bg-gray-200" />
            </div>
            <h6 className="text-center text-xl text-gray-500 font-bold">Subscribe</h6>
            <p className="text-center text-gray-400 font-semibold">Get our latest news, tips and tricks</p>
            <div className="flex flex-row justify-center my-12 gap-2">
                <input className={`${classes.input} w-1/5 p-3`} placeholder="E-Mail*" />
                <button className={`${classes.button} p-y px-5 hover:text-white hover:bg-black`}>
                    Submit
                </button>
            </div>
            <div className="flex flex-row justify-center text-gray-400 gap-2 text-sm">
                <span className="hover:underline cursor-pointer">About</span>
                <span>|</span>
                <span className="hover:underline cursor-pointer">Imprint</span>
                <span>|</span>
                <span className="hover:underline cursor-pointer">Contact</span>
                <span>|</span>
                <span className="hover:underline cursor-pointer">Privacy Policy</span>
            </div>
            <div className="text-center text-gray-400 text-sm mt-4 mb-16">
                <p>
                    © 2018 Enfold by Kriesi
                </p>
            </div>
        </div>
    )
}