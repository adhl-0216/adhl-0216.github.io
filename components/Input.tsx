import { ChangeEvent } from 'react';

interface Props {
    label: string;
    placeholder: string;
    name: string;
    value?: string;
    type?: string;
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Input(props: Props) {
    return (
        <label className="flex flex-col gap-2 text-2xl font-normal">{props.label}
            <input
                className="self-stretch h-12 p-4 bg-white rounded-lg border border-zinc-300 justify-start items-center grow shrink text-lg font-normal text-text-400"
                placeholder={props.placeholder}
                type={props.type ?? 'text'}
            />
        </label>
    )
}