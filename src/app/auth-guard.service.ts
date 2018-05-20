import { 
    CanActivate, 
    ActivatedRouteSnapshot, 
    RouterStateSnapshot, 
    Router,
    CanActivateChild
} from "@angular/router";

import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild
{
    // Inject the FAKE authentication Service and Router
    constructor( private authService: AuthService,
                 private router: Router) {} 

    // 1. Augular injects route and state
    // 2. [KEY]: Return 3 possible types
    canActivate( route: ActivatedRouteSnapshot, 
                 state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean
    {
        // This returns a Promise
        return this.authService.isAuthenticated()
            .then(
                ( authenticated: boolean ) => 
                {
                    if ( authenticated ) 
                    {
                        return true;
                    } 
                    else 
                    {
                        this.router.navigate(['/']);    // Send to root URL
                    }
                }
            );
    }

    canActivateChild( route: ActivatedRouteSnapshot, 
                      state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean
    {
        return this.canActivate( route, state );
    }
}