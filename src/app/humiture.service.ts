import { Injectable } from '@angular/core';
import { Humiture } from './humiture';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HumitureService {

  constructor() { }

  getHumitures(): Observable<Humiture[]> {
    const HUMITRUES: Humiture[] = [
      { id: 11, time: '2018-09-26-15:49',humidity:56.1,temperature:27.1 },
      { id: 12, time: '2018-09-26-15:48',humidity:56.0,temperature:27.0 },
      { id: 13, time: '2018-09-26-15:47',humidity:55.9,temperature:27.2 },
      { id: 14, time: '2018-09-26-15:46',humidity:56.1,temperature:27.4 },
      { id: 15, time: '2018-09-26-15:45',humidity:56.2,temperature:27.3 },
      { id: 16, time: '2018-09-26-15:44',humidity:56.3,temperature:26.9 }
    ];
    return of(HUMITRUES);
  }
}
