

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayDataService {

  constructor(
    private _http: HttpClient
  ) { }

  getAlldata(): Observable<any> {
    return this._http.get("assets/demoData.json")
  }

  
  
 
  

}



