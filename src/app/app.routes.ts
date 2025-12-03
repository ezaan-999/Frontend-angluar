import { Routes } from '@angular/router';
import { Users } from './users/users';
import { CreatePacking } from './create-packing/create-packing';
import { Add } from './add/add';
import { Settings } from './settings/settings';
import { Bootstrap } from './bootstrap/bootstrap';
export const routes: Routes = [
    {
        path: 'Users',
        component: Users

    },
    {
        path: '', redirectTo: '/Users', pathMatch: 'full'
    },
    {
        path: 'create-packing',
        component: CreatePacking
    },
    {
        path: 'add',
        component: Add
    },
    {
        path: 'settings',
        component: Settings
    },
    {
        path: 'bootstrap',
        component: Bootstrap
    }
];


