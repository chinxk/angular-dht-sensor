import { Injectable } from '@angular/core';
import { Humiture } from './humiture';
import { Observable, of } from 'rxjs';
import { Http } from '@angular/http';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HumitureService {

  constructor(private http: Http,private httpClient: HttpClient) { }
  
  current:Humiture;
  HUMITRUES: Humiture[] = [];

  getHumitures(): Observable<Humiture[]> {
    this.http.get('assets/data.csv')
      .toPromise()
      .then((response) => {
        response.text().split('\n').forEach(l => {
          const a = l.split(',');
          const h = {  time: a[0],temperature:a[1],humidity:a[2] };
          this.HUMITRUES.push(h);
        });
      });
    return of(this.HUMITRUES);
  }

  getLatestHumiture(): Observable<Humiture> {
    this.current = this.HUMITRUES.pop();
    return of(this.current);
  }
}
