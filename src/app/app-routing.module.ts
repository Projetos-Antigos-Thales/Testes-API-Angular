import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActiveHomeComponent } from './activehome/activehome.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';




const routes: Routes = [
    { path: 'actives', component: ActiveHomeComponent },
    { path: 'edit:cpf', component: EditComponent },
    { path: 'edit', component: EditComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: HomeComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ] })

export class AppRoutingModule { }