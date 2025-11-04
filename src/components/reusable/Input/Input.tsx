import React from 'react';

interface InputProps {
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    type?: string;
    icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ 
    placeholder, 
    value, 
    onChange, 
    className = '', 
    type = 'text',
    icon 
}) => {
    return (
        <div className={`relative ${className}`}>
            {icon && (
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    {icon}
                </div>
            )}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    icon ? 'pl-10' : ''
                }`}
            />
        </div>
    );
};

export default Input;
