import { MenuItem } from "primeng/api";


export interface Menu extends MenuItem {
    subMenus: Menu[];
}

export const MENU_ITEMS: Menu[] = [
    { label: 'Dashboard', icon: 'pi pi-chart-bar', routerLink: null, subMenus: [], },
    { label: 'Bookmarks', icon: 'pi pi-bookmark', routerLink: null, subMenus: [], },
    {
        label: 'Reports', icon: 'pi pi-chart-line', routerLink: null, subMenus: [
            {
                label: 'Revenue', icon: 'pi pi-chart-line', routerLink: null, subMenus: [
                    { label: 'View', icon: 'pi pi-table', routerLink: null, subMenus: [], },
                    { label: 'Search', icon: 'pi pi-search', routerLink: null, subMenus: [], },
                ],
            }, {
                label: 'Expenses', icon: 'pi pi-chart-line', routerLink: null, subMenus: [],
            },
        ],
    },
    {
        label: 'Team', icon: 'pi pi-users', routerLink: null, subMenus: [],
    },
    {
        label: 'Calendar', icon: 'pi pi-calendar', routerLink: null, subMenus: [],
    },
    {
        label: 'Projects', icon: 'pi pi-folder', routerLink: null, subMenus: [],
    },
    {
        label: 'Performance', icon: 'pi pi-chart-bar', routerLink: null, subMenus: [],
    },
    {
        label: 'Settings', icon: 'pi pi-cog', routerLink: null, subMenus: [],
    },
];

export const HTTP_HEADER = {
    'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'
}
