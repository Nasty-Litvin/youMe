import "./style.scss";

type buttonVariant = "default" | "violet"

interface ButtonProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    variant?: buttonVariant;
    className?: string;
}

const Button = ({text, variant="default", ...prop}: ButtonProp) => {
    return ( 
        <button 
            className={`button button--${variant}`}
            {...prop}
        >
            {text}
        </button>
     );
}
 
export default Button;