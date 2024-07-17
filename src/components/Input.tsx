import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
}
// necessário usar className dentro do destructuring, pois ao tentarmos usar o className no componente <Input /> (arquivo App.tsx), ele não reconhece o className do componente <Input />, pois ele está sendo sobrescrito pela classe do componente App.tsx
export default function Input({ className, ...props }: InputProps) {
    return (
        <input
            className={`block w-full border border-rose-400 rounded p-3 ${className ?? ''}`} {...props}
        />
    )
}