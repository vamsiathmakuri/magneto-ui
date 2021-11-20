
export interface MenuBarItem {
    name: string;
    path?: string;
    iconURL?: string;
    children?: MenuBarItem[];
}
