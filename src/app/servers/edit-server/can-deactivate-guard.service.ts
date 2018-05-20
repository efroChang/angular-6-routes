import { Observable } from "rxjs";
import { CanDeactivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export interface CanComponentDeactivate
{
    canComponentDeactivate: () => Observable<boolean> | Promise<boolean> | boolean
}

export class CanDeactivateGuard implements CanDeactivate< CanComponentDeactivate >
{
    canDeactivate( component: CanComponentDeactivate,
                   currentRoute: ActivatedRouteSnapshot,
                   curretnState: RouterStateSnapshot,
                   nextState?: RouterStateSnapshot
                ): Observable<boolean> | Promise<boolean> | boolean
    {
        return component.canComponentDeactivate();
    }
}