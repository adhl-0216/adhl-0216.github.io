import { ChangeEvent } from 'react';

interface Props {
    label: string;
    placeholder: string;
    name: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Input(props: Props) {
    return (
        <label className="text-2xl font-normal flex flex-col">{props.label}
            <div className="self-stretch h-12 lg:px-4 lg:py-3.5 bg-white rounded-lg border border-zinc-300 justify-start items-center inline-flex">
                <input className="grow shrink basis-0 text-xl font-normal text-text-400" placeholder={props.placeholder} />
            </div>
        </label>
    )
}