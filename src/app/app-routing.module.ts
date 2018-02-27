import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LinksComponent } from './links/links.component';
import { AddLinkComponent } from './add-link/add-link.component';
import { EditLinkComponent } from './edit-link/edit-link.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/links',
        pathMatch: 'full'
    },
    {
        path: 'links', component: LinksComponent
    },
    {
        path: 'links', component: LinksComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [HomeComponent]
})
export class AppRoutingModule {
}
