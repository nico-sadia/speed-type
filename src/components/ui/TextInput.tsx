import { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function TextInput({ ...props }: TextInputProps) {
    return <input {...props} type="text" className={props.className}></input>;
}
