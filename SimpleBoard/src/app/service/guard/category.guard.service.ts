import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {ConfigService} from "../config.service";

@Injectable()
export class CategoryGuardService implements CanActivate {
    constructor(private router: Router, private ConfigService: ConfigService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log(route.params.category);
        if (this.ConfigService.categories[route.params.category]) {
            return true;
        }
        this.router.navigate(['board/free/main']);
        return false;
    }
}
