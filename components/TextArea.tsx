import { ChangeEvent } from 'react';

interface Props {
    label: string;
    placeholder: string;
    name: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea({ label, placeholder, value, onChange }: Props) {
    return (
        <label className="flex flex-col gap-2 self-stretch text-2xl font-normal">{label}
            <textarea
                className="self-stretch grow shrink basis-0 p-4 bg-white rounded-lg border text-lg font-normal text-text-400"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                rows={4}
            />
        </label>
    );
}
