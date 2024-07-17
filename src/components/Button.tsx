import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export default function Button({ children, ...props }: ButtonProps) {
    return (
        <button className="mt-6 bg-rose-400 text-white font-bold w-full p-3 rounded" {...props}>
            {children}
        </button>
    )
}