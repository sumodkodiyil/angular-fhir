import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ErrorService {

  constructor() { }

  handleError<T> (operation: string, result?: T){
    return (error: any): Observable<T> => {
      console.error(operation);
      return of(result as T);
    }
  }

  private logError(message: string){

  }

}
