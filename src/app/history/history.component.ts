import { Component, OnInit } from '@angular/core';
import { Humiture } from '../humiture';

import { HumitureService } from '../humiture.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  humitures: Humiture[];

  constructor(private humitureService: HumitureService) { }

  ngOnInit() {
    this.getHumitures();
  }

  getHumitures(): void {
    this.humitureService.getHumitures().subscribe(humitures => this.humitures = humitures);
  }

}
