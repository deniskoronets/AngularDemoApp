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
import {EditSpotComponent} from './components/pages/map-view/spot/edit-spot/edit-spot.component';
import {ErrorComponent} from './components/pages/error/error.component';
import {NoAccessComponent} from './components/pages/no-access/no-access.component';
import {EditMapComponent} from './components/pages/map-view/edit-map/edit-map.component';

const routes: Routes = [
    {
        path: '',
        component: SiteComponent,
        children: [
            {path: '', component: DashboardComponent},
            {path: 'login', component: LoginComponent},
            {path: 'logout', component: LogoutComponent},
            {path: '403', component: NoAccessComponent},
            {path: '404', component: NotFoundComponent},
            {path: 'error', component: ErrorComponent},
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
                    {path: 'edit', component: EditMapComponent},
                    {path: 'spot/:spotId', component: SpotComponent},
                    {path: 'spot/:spotId/edit', component: EditSpotComponent},
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
