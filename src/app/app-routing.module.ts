import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

import { Routes } from "@angular/router";
import { RouterModule } from '@angular/router';   // [KEY]
import { AuthGuard } from "./auth-guard.service";

// [KEY]: Declare the Routes:
const appRoutes: Routes = 
[
  { path: '', component: HomeComponent },
  
  { path: 'users', 
    component: UsersComponent, 
    children:
    [
      { path: ':id/:name', component: UserComponent },
    ]
  },

  { path: 'servers', 
    canActivate: [AuthGuard],
    component: ServersComponent,
    children:
    [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent }
    ]  
  },

  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }                    // [KEY]: "**" wildcard catch all and MUST be at the end of the Routes array
];


@NgModule({
    imports: [
        RouterModule.forRoot( appRoutes )       // [KEY]: Register "appRoutes" defined above.
    ],
    exports: [RouterModule]                     // [KEY]: Export the RouterModule for whoever imports this module.
})
export class AppRoutingModule
{

}