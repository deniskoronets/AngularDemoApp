import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import {HttpClientModule} from '@angular/common/http';
import { LogoutComponent } from './components/pages/logout/logout.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { MapViewComponent } from './components/pages/map-view/map-view.component';
import { InfoComponent } from './components/pages/map-view/info/info.component';
import { SpotComponent } from './components/pages/map-view/spot/spot.component';
import { EditComponent } from './components/pages/map-view/spot/edit/edit.component';

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
        EditComponent,
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
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
