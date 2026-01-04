export interface ILeftMenuItemProps {
    name: string;
    link?: string;
    icon?: React.ReactNode;
    submenu?: any[];
    onClick?: () => void;
    active?: boolean;
}