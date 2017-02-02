import { provideRouter } from "@angular/router";

import { DirectoryComponent } from "./directory/directory.component";
import { HomeComponent } from "./home/home.component";
import { DetailComponent } from "./detail/detail.component";
import { EmptydetailComponent } from "./emptydetail/emptydetail.component";
import { UsersComponent } from "./users/users.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const APP_ROUTES = [
    { path: 'movies', component: DirectoryComponent },
    { path: 'detail', component: EmptydetailComponent },
    { path: 'detail/:id', component: DetailComponent },
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent}
];

export const APP_ROUTES_PROVIDER = [
    provideRouter(APP_ROUTES)
];