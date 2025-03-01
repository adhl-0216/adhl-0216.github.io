import { ChangeEvent } from 'react';

interface Props {
    label: string;
    placeholder: string;
    name: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    required?: boolean;
}

export default function TextArea({ label, placeholder, value, onChange, required = false, name }: Props) {
    return (
        <label className="flex flex-col gap-2 self-stretch text-2xl font-normal">
            {label}
            <textarea
                className="self-stretch grow shrink basis-0 p-4 bg-white rounded-lg border text-lg font-normal min-h-40 text-text-400"
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={onChange}
                required={required}
                rows={4}
            />
        </label>
    );
}
