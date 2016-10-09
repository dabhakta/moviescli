import { provideRouter } from "@angular/router";

import { DirectoryComponent } from "./directory/directory.component";
import { HomeComponent } from "./home/home.component";
import { DetailComponent } from "./detail/detail.component";
import { EmptydetailComponent } from "./emptydetail/emptydetail.component";

const APP_ROUTES = [
    { path: 'movies', component: DirectoryComponent },
    { path: 'detail', component: EmptydetailComponent },
    { path: 'detail/:id', component: DetailComponent },
    { path: '', component: HomeComponent }
];

export const APP_ROUTES_PROVIDER = [
    provideRouter(APP_ROUTES)
];