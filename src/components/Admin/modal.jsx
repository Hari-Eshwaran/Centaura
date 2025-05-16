import React from "react";
import { X } from "lucide-react";

export const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-end p-6">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-20" onClick={onClose} />
            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-md rounded-xl shadow-lg z-10">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black"
                >
                    <X className="w-5 h-5" />
                </button>
                {children}
            </div>
        </div>
    );
};
