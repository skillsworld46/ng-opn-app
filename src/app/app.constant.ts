import { MenuItem } from "primeng/api";


export interface Menu extends MenuItem {
    subMenus: Menu[];
}

export const MENU_ITEMS: Menu[] = [
    { label: 'Dashboard', icon: 'pi pi-chart-bar mr-2', routerLink: '/', subMenus: [], },
    {
        label: 'Reports', icon: 'pi pi-table mr-2', routerLink: null, subMenus: [
            { label: 'Trend Chart', icon: 'pi pi-chart-line mr-2', routerLink: '/report/trend-chart', subMenus: [], },
        ],
    },
    {
        label: 'Settings', icon: 'pi pi-cog mr-2', routerLink: null, subMenus: [],
    }, {
        label: 'Demo', icon: 'pi pi-wrench mr-2', routerLink: '/demo', subMenus: [],
    },
];

export const HTTP_HEADER = {
    'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'
}
