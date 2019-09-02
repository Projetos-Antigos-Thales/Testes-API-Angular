import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register';
import { EditComponent } from './edit';

const routes: Routes = [

    { path: 'register', component: RegisterComponent },
    { path: 'edit', component: EditComponent },
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
