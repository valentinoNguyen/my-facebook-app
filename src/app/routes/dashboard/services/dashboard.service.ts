import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EngineerModel } from '../models/engeneer.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(search: string): Observable<EngineerModel[]> {
    return this.http.get<EngineerModel[]>('dashboards').pipe(
      map(datas => {
        const searchTerm = search || '';
        return datas.filter(d => d.name.toLowerCase().includes(searchTerm.toLowerCase()));
      })
    );
  }

  getById(id: number): Observable<EngineerModel> {
    return this.http.get<EngineerModel>('dashboards/' + id);
  }

}
