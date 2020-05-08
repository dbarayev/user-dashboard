import { Component, OnInit, ViewChild } from '@angular/core';
import { MembersService } from '../services/members.service';
import { Member } from './members';

import {Item, Period, Section, Events, NgxTimeSchedulerService} from 'ngx-time-scheduler';
import * as moment from 'moment';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {

  constructor(private memberService: MembersService, private service: NgxTimeSchedulerService) { }
  member : any;
  membersLoaded : boolean = false;
  timelineLoaded : boolean = false;
  progressChartLoaded : boolean = false;
  //Time Scheduler
  events: Events = new Events();
  periods: Period[];
  sections: Section[];
  items: Item[];
  textObj: Object ={SectionTitle:'Milestone', NextButton:'Next', PrevButton:'Prev'};

  renderTimeScheduler() : void {
    this.periods = [
      {
        name: '2 week',
        timeFrameHeaders: ['MMM YYYY', 'DD ddd'],
        classes: 'timeline-btn',
        timeFrameOverall: 1440 * 14,
        timeFramePeriod: 1440,
      }, {
        name: '3 days',
        timeFramePeriod: (60 * 3),
        timeFrameOverall: (60 * 24 * 3),
        timeFrameHeaders: ['Do MMM'],
        classes: 'period-3day timeline-btn'
      }, {
        name: '1 week',
        timeFrameHeaders: ['MMM YYYY', 'DD ddd'],
        classes: 'timeline-btn',
        timeFrameOverall: 1440 * 7,
        timeFramePeriod: 1440,
      }];
 
    this.sections = [{
      name: 'Research',
      id: 1
    }, {
      name: 'Implementation',
      id: 2
    }, {
      name: 'Idea & Mockups',
      id: 3
    }];
 
    this.items = [{
      id: 1,
      sectionID: 1,
      name: '0 Events | 1 Task(s)',
      start: moment().startOf('day'),
      end: moment().add(5, 'days').endOf('day'),
      classes: ''
    }, {
      id: 2,
      sectionID: 2,
      name: '2 Events | 1 Task(s)',
      start: moment().add(5, 'days').startOf('day'),
      end: moment().add(9, 'days').endOf('day'),
      classes: 'item-success'
    }, {
      id: 3,
      sectionID: 3,
      name: '5 Events | 2 Task(s)',
      start: moment().add(10, 'days').startOf('day'),
      end: moment().add(15, 'days').endOf('day'),
      classes: 'item-warning'
    }];
    this.timelineLoaded = true;
  }
 
  addItem() {
    this.service.itemPush({
      id: 4,
      sectionID: 5,
      name: 'Item 4',
      start: moment().startOf('day'),
      end: moment().add(3, 'days').endOf('day'),
      classes: ''
    });
  }
 
  popItem() {
    this.service.itemPop();
  }
 
  removeItem() {
    this.service.itemRemove(4);
  }

  //Progress Chart
  @ViewChild('progressCanvas', {static: true}) private chartRef;
  progressChart = [];
  month = moment.monthsShort();
  chartData = [];
  yAxisMax : number;

  progressChartDetails() {
    this.progressChart = new Chart(this.chartRef.nativeElement,{
    type: 'bar',
        data: {
          labels: this.month,
          datasets: [
            {
              data: [[5,6], [-3,-6], [3,7], [-2,-6], [1,7], [5,7], [2,3], [-1,8], [-4,-7], [6,8], [5,3], [6,1], [0,1]],//this.chartData,
              /*borderColor: '#3cba9f',
              fill: false*/
              barPercentage: 0.5,
              barThickness: 6,
              maxBarThickness: 8,
              minBarLength: 2
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          plugins: {
            labels: false
          },
          scales: {
            xAxes: [{
              display: true,
              stacked: true
            }],
            yAxes: [{
              display: true,
              stacked: true,
              ticks: {
                beginAtZero: true,
              }
            }],
          }
        }
        });
        this.progressChartLoaded = true;
  }


  //get Members
  getMembers() : void {
    this.memberService.getMembers()
    .subscribe(member => { this.member = member; this.membersLoaded = true; });
  }

  ngOnInit() {
    this.getMembers();
    this.renderTimeScheduler();
    this.progressChartDetails();
  }

}
