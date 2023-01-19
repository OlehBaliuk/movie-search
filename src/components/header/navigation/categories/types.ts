interface ListProps {
    active: string;
}

interface CategoriesProps {
    redirectToCategoryPage: (e: any, category: string) => void;
}

export type { ListProps, CategoriesProps };
