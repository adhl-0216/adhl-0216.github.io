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
        <div className="flex-col gap-2 flex">
            <label className="self-stretch text-2xl font-normal leading-loose">{label}</label>
            <textarea
                className="self-stretch grow shrink basis-0 px-4 py-3.5 bg-white rounded-lg border text-lg font-normal leading-relaxed text-text-400"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                rows={4}
            />
        </div>
    );
}
