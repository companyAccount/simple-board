import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {SharedService} from "../shared.service";

@Injectable()
export class CategoryGuardService implements CanActivate {
    constructor(private router: Router, private SharedService: SharedService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log(route.params.category);
        if (this.SharedService.categories[route.params.category] === true) {
            return true;
        }
        this.router.navigate(['board/free/main']);
    }
}
