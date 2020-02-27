import {Routes, RouterModule} from "@angular/router";
import { MovieTableComponent } from "./movieTable.component";
import { MovieDetailComponent } from "./movieDetail.component";

const routes: Routes = [
    { path: "table", component: MovieTableComponent},
    { path: "detail/:id", component: MovieDetailComponent},
    { path: "detail", component: MovieDetailComponent},
    { path: "", component: MovieTableComponent} 
]

export const RoutingConfig = RouterModule.forRoot(routes);