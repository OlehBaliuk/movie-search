interface ModalProps {
    active: boolean;
}

interface ErrorModalProps {
    active: boolean;
    setActive: (arg: boolean) => void;
    message: string;
}

export type { ModalProps, ErrorModalProps };
