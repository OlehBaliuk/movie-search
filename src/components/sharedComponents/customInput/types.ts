interface CustomInputProps {
    handleSubmit: () => void;
    handleChange: () => void;
    value: string;
    type: string;
    placeholder: string;
    className?: string;
}

export type { CustomInputProps };
