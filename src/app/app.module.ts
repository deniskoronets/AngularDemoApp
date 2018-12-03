import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { LoginComponent } from './components/pages/login/login.component';
import {SiteComponent} from './components/layouts/site/site.component';
import {BasicComponent} from './components/layouts/basic/basic.component';
import {User} from './user';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LogoutComponent } from './components/pages/logout/logout.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { MapViewComponent } from './components/pages/map-view/map-view.component';
import { InfoComponent } from './components/pages/map-view/info/info.component';
import { SpotComponent } from './components/pages/map-view/spot/spot.component';
import { EditSpotComponent } from './components/pages/map-view/spot/edit-spot/edit-spot.component';
import {AppErrorHandler} from './app-error-handler';
import { ErrorComponent } from './components/pages/error/error.component';
import { NoAccessComponent } from './components/pages/no-access/no-access.component';
import { EditMapComponent } from './components/pages/map-view/edit-map/edit-map.component';
import {ApiHttpInterceptor} from './api-http.interceptor';

@NgModule({
    declarations: [
        AppComponent,

        SiteComponent,
        BasicComponent,

        DashboardComponent,
        SignUpComponent,
        LoginComponent,
        LogoutComponent,
        NotFoundComponent,
        MapViewComponent,
        InfoComponent,
        SpotComponent,
        EditSpotComponent,
        ErrorComponent,
        NoAccessComponent,
        EditMapComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        NgbModule,
        HttpClientModule,
    ],
    providers: [
        User,
        {provide: ErrorHandler, useClass: AppErrorHandler},
        {provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true},
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
