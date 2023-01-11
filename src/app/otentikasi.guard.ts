import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router,   RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtentikasiGuard implements CanActivate {
constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("Otentikasi Dimulai");

      var userId = sessionStorage.getItem("userId");
      console.log("userId : " + userId );

      if (userId == null ) {
      }
      else if(userId == "undefined"){

      }
      else if(userId == ""){

      }
      else{
        return true;
      }

      this.router.navigate(["/login"])
    return true;
  }
  
}
