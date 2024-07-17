// Forma 1
/*
import { LabelHTMLAttributes } from "react";

export default function Label({ children, ...props }: LabelHTMLAttributes<HTMLLabelElement> & { children: React.ReactNode }) {
    return (
        <label className="block text-neutral-600 font-light" {...props}>
            {children}
        </label>
    )
}
*/

// Forma 2
/*
import { LabelHTMLAttributes } from "react"

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    children: React.ReactNode
}

export default function Label(props: LabelProps) {
    return (
        <label className="block text-neutral-600 font-light text-sm" {...props}>
            {props.children}
        </label>
    )
}
*/

// Forma 3
import { LabelHTMLAttributes } from "react"

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    children: React.ReactNode
}

export default function Label({ children, ...props }: LabelProps) {
    return (
        <label className="block text-neutral-600 font-light text-sm" {...props}>
            {children}
        </label>
    )
}