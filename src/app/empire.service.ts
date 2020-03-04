import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from "@angular/common/http";
import { Observable } from 'rxjs'
import { Turntabl_Project, Endpoints, Status } from './endpoints';

@Injectable({
  providedIn: 'root'
})
export class EmpireService {
  testUrl:string = 'http://192.168.8.122:8050/:8050/api/v1/status'
  
  constructor(private http: HttpClient) {
    this.http.get<any>(window.location.origin + '/').subscribe(res => {
      sessionStorage.setItem('turntablproject_url', res.turntablproject_url)
      sessionStorage.setItem('endpoints_url', res.endpoints_url)
    })
  }
  getProjects(): Observable<Turntabl_Project[]> {
    return this.http.get<Turntabl_Project[]>(sessionStorage.getItem('turntablproject_url'));

  }
  
  getProjectById(id: number): Observable<Turntabl_Project>{
    return this.http.get<Turntabl_Project>(sessionStorage.getItem('turntablproject_url') + id);
  }

  getEndpoints(): Observable<Endpoints[]> {
    return this.http.get<Endpoints[]>(sessionStorage.getItem('endpoints_url'));
  }
  
  getEndpointById(id: number): Observable<Endpoints>{
    return this.http.get<Endpoints>(sessionStorage.getItem('endpoints_url') + id);
  }

  getStatus(): Observable<Status[]> {
      return this.http.get<Status[]>(this.testUrl);
  }
  
}

