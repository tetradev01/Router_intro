import { provideRouter } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES = [
    {path:'user', component: UserComponent},
    {path:'', component: HomeComponent}

];

export const APP_ROUTES_PROVIDER = [
provideRouter(APP_ROUTES)

];


