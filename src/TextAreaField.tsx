import React from 'react';

interface TextAreaFieldProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    rows?: number; // Cantidad de líneas o renglones
    resizable?: boolean; // Define si el campo es expandible o no
    styles?: React.CSSProperties; // Estilos aplicados al contenedor
    className?: string;
    id?: string;
    [key: string]: any; // Para props adicionales
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
    value,
    onChange,
    placeholder,
    rows = 3,
    resizable = true,
    styles,
    className,
    id, ...props }) => {
    return (
        <div

        >
            <textarea
                className={`text-field ${className}`}
                id={id}

                value={value}
                onChange={onChange}
                placeholder={placeholder}
                rows={rows}
                style={{
                    resize: resizable ? 'both' : 'none',
                    ...styles
                }} // Control de expansión
                {...props}
            />
        </div>
    );
};

export default TextAreaField;
