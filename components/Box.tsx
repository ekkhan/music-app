
import { twMerge } from "tailwind-merge"; //helps remove conflicting tailwind classes, dont want messy HTML/bugs

interface BoxProps {
    children: React.ReactNode;
    className?: string; //optional string
}
const Box: React.FC<BoxProps> = ({children, className}) => {
    return (
        <div 
          //twMerge concatenates and cleans up the list
          className={twMerge(`
            bg-neutral-900
            rounded-lg
            h-fit
            w-full
        `,
          className)}>
            {children}
        </div>
    );
} 

export default Box;