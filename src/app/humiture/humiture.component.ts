import { Component, OnInit } from '@angular/core';
import { Humiture } from '../humiture';

import { HumitureService } from '../humiture.service';


@Component({
  selector: 'app-humiture',
  templateUrl: './humiture.component.html',
  styleUrls: ['./humiture.component.css']
})
export class HumitureComponent implements OnInit {

  humiture: Humiture;

  constructor(private humitureService: HumitureService) { }

  ngOnInit() {
    this.getHumitures();
  }

  getHumitures(): void {
    this.humitureService.getHumitures().subscribe(humitures => this.humiture = humitures.pop());
  }

}
