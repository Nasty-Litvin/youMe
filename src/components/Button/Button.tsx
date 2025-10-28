import "./style.scss";



type buttonVariant = "default" | "violet"

interface ButtonProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    variant?: buttonVariant;
    shadow?: boolean;
    className?: string;
}

const Button = ({text, variant="default", shadow, ...prop}: ButtonProp) => {
    return ( 
        <button 
            className={`button button--${variant} ${shadow ? "button--shadow" : ""}`}
            {...prop}
        >
            {text}
        </button>
     );
}
 
export default Button;