
interface BoxProps {
    children: React.ReactNode;
    className?: string; //optional string
}
const Box: React.FC<BoxProps> = ({children, className}) => {
    return (
        <div>
            {children}
        </div>
    );
} 

export default Box;