import { Routes } from '@angular/router';
import { Users } from './users/users';
import { CreatePacking} from './create-packing/create-packing';
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
    }
];


