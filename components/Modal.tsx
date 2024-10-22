import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface ModalProps {
    message: string;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
            <div className="flex flex-col bg-accent-950 rounded-lg p-4 pt-2 min-h-24 shadow-lg">
                <button
                    onClick={onClose}
                    className="fill-primary-50 ms-auto"
                >
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <p className="text-lg">{message}</p>
            </div>
        </div>
    );
};

export default Modal;
