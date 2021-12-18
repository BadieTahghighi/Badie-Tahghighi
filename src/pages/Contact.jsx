import { makeStyles } from "@mui/styles";

export default function Contact() {

    const useStyles = makeStyles({
        input: {
            outline: 'none',
        },
        button: {
            transition: '0.5s',
            borderRadius: '2px',
        },
    });
    const classes = useStyles();
    return (
        <div>
            <p className="my-40 text-7xl">
                Contact – Get in touch! I am currently available for contract work
            </p>
            <div className="flex flex-row pt-20">
                <div className="w-1/2">
                    <p className="font-semobold text-5xl mb-8">I am located in</p>
                    <p>Main Street 1, Williamsville</p>
                    <p className="text-gray-400 mb-8">Buffalo, USA</p>
                    <p>office@enfold-minimal.com</p>
                    <p className="text-gray-400 mb-8">+555 283 784 333</p>
                    <p className="text-gray-400">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        <br />
                        <br />
                        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    </p>
                </div>
                <div className="w-1/2">
                    <p className="font-semobold text-5xl mb-4 flex flex-col">
                        Feel free to drop me a mail
                    </p>
                    <div className="flex flex-row gap-4">
                        <input className={`${classes.input} w-1/2 bg-gray-50 py-4 px-4`} placeholder="Name*" />
                        <input className={`${classes.input} w-1/2 bg-gray-50 py-4 px-4`} placeholder="E-Mail*" />
                    </div>
                    <textarea placeholder="Message*" className={`${classes.input} my-4 w-full bg-gray-50 px-4 py-4 h-60`} />
                    <button  className={`${classes.button} text-white bg-black hover:bg-pink-300 px-8 py-4`}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}