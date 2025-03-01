import { ChangeEvent } from 'react';

interface Props {
    label: string;
    placeholder: string;
    name: string;
    value?: string;
    type?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

export default function Input({ label, placeholder, type = 'text', required = false, ...props }: Props) {
    return (
        <label className="flex flex-col gap-2 text-2xl font-normal">
            {label}
            <input
                className="self-stretch h-12 p-4 bg-white rounded-lg border border-zinc-300 justify-start items-center grow shrink text-lg font-normal text-text-400"
                placeholder={placeholder}
                type={type}
                required={required}
                {...props}
            />
        </label>
    );
}
