import { Component, OnInit } from '@angular/core';
import { Humiture } from '../humiture';

import { HumitureService } from '../humiture.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public obj:{};

  humitures: Humiture[];

  constructor(private humitureService: HumitureService) { }

  ngOnInit() {
    this.getHumitures();
  }

  getHumitures(): void {
    let timedatas = [];
    let tempdatas = [];
    let humidatas = [];
    this.humitureService.getHumitures()
        .subscribe(humitures => {
          humitures.forEach(data =>{
            timedatas.push(data.time);
            tempdatas.push(data.temperature);
            humidatas.push(data.humidity);
          })
        });
    this.obj = {
      title: {
          text: ''
      },
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          data:['温度','湿度']
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      toolbox: {
          feature: {
              saveAsImage: {}
          }
      },
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: timedatas
      },
      yAxis: {
          type: 'value'
      },
      series: [
          {
              name:'温度',
              type:'line',
              data:tempdatas
          },
          {
              name:'湿度',
              type:'line',
              data:humidatas
          }
      ]
  };
  
  }  
}
