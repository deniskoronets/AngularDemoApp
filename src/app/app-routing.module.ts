import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/pages/dashboard/dashboard.component';
import {SiteComponent} from './components/layouts/site/site.component';
import {NotFoundComponent} from './components/pages/not-found/not-found.component';
import {LogoutComponent} from './components/pages/logout/logout.component';
import {LoginComponent} from './components/pages/login/login.component';
import {BasicComponent} from './components/layouts/basic/basic.component';
import {MapViewComponent} from './components/pages/map-view/map-view.component';
import {InfoComponent} from './components/pages/map-view/info/info.component';
import {SpotComponent} from './components/pages/map-view/spot/spot.component';
import {EditComponent} from './components/pages/map-view/spot/edit/edit.component';

const routes: Routes = [
    {
        path: '',
        component: SiteComponent,
        children: [
            {path: '', component: DashboardComponent},
            {path: 'login', component: LoginComponent},
            {path: 'logout', component: LogoutComponent},
            {path: '404', component: NotFoundComponent},
        ]
    },
    {
        path: '',
        component: BasicComponent,
        children: [
            {
                path: 'map/:id',
                component: MapViewComponent,
                children: [
                    {path: '', component: InfoComponent},
                    {path: 'spot/:spotId', component: SpotComponent},
                    {path: 'spot/:spotId/edit', component: EditComponent},
                ]
            },
        ]
    },
    {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
