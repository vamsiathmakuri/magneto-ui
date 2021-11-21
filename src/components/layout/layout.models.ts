
export interface MenuBarItem {
    name: string;
    path?: string;
    iconURL?: string;
    children?: MenuBarItem[];
}

export interface HeaderOption {
    name: string;
    iconURL?: string;
}
