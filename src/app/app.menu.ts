import { MenuItem } from '../fw/services/menu.service';
import { text } from '@angular/core/src/render3/instructions';

export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Dashboard',
        icon: 'glyphicon-dashboard',
        route: '/authenticated/dashboard',
        submenu: null
    },
    {
        text: 'Countries',
        icon: 'glyphicon-flag',
        route: null,
        submenu: [
            {
                text: 'Select',
                icon:'glyphicon-expand',
                route: null,
                submenu: [
                    {
                        text: 'USA',
                        icon: 'glyphicon-flag',
                        route: '/authenticated/country-detail/USA',
                        submenu: null
                    },
                    {
                        text:'Germany',
                        icon:'glyphicon-flag',
                        route: '/authenticated/country-detail/Germany',
                        submenu:null
                    },
                    {
                        text:'Switzerland',
                        icon:'glyphicon-flag',
                        route: '/authenticated/country-detail/Switzerland',
                        submenu:null
                    }
                ]
            },
            {
                text: 'Top 10',
                icon: 'glyphicon-flag',
                route: 'country-list/10',
                submenu: null
            },
            {
                text: 'All',
                icon: 'glyphicon-flag',
                route: 'country-list/0',
                submenu: null
            }
        ] 
    },
    {
        text: 'Maintenance',
        icon: 'glyphicon-wrench',
        route: null,
        submenu: [
            {
                text:'Country-List',
                icon:'glyphicon-th-list',
                route:'country-maint',
                submenu: null
            },
            {
                text:'Settings',
                icon:'glyphicon-cog',
                route:'settings',
                submenu: null
            }
        ] 
    }

]