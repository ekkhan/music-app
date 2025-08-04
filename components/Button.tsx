import { forwardRef } from "react"; // ref is a way to get direct access to a real DOM element 
import { twMerge } from "tailwind-merge";

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

    // <> below is a generic type parameter list
    // forwardRef lets u pass the ref into custom components
    // ref lets u control dom stuff
    // first arg = ref will point to html button element
    // second arg= component accepts props shaped like buttonprops
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button", //defaults if type not provided
    ...props
}, ref) => {
    return (
        <button
            type={type}
            className=
              {twMerge(
                `w-full 
                rounded-full 
                bg-green-500 
                border 
                border-transparent 
                px-3 
                py-3 
                disabled:cursor-not-allowed
                disabled:opacity-50
                text-black
                font-bold
                hover:opacity-75
                transition`,
                className)}
                disabled={disabled}
                ref={ref}
                {...props}>
          {children}
        </button>
    )
})

Button.displayName = "Button";

export default Button;