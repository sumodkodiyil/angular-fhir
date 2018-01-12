import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class CookieHandler {

  constructor(private cookieHandler: CookieService,
   ) { }

  setCookie(key: string,value: string, expiry: number): void{
    this.cookieHandler.set(key,value, expiry);
  }

  getCookie(key: string): string {
    return this.cookieHandler.get(key);
  }

}
