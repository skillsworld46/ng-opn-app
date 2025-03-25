import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookmarkComponent } from './bookmark/bookmark.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        component: HomeComponent,
        path: 'home',
    },
    {
        component: BookmarkComponent,
        path: 'bookmark',
    },
];
