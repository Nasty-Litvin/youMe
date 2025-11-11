

import './style.scss';

interface TitleProp extends React.HTMLAttributes<HTMLDivElement> {
    text: string;
    className?: string;
}

const Title = ({text, className='', ...props}: TitleProp) => {
    return (
        <div className={`title ${className}`} {...props}>{text}</div>
    )
}

export default Title;