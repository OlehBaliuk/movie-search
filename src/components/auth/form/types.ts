interface FormProps {
    handleSubmit: (login: string, password: string) => void;
    isRegistration?: boolean;
    loading: boolean;
}

export type { FormProps };
