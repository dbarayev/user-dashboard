import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { RevenueService } from '../services/revenue.service';
import { ClientsService } from '../services/clients.service';
import { ProjectsService } from '../services/projects.service';
import { MonthlyTotalsService } from '../services/monthly-totals.service';
import { ActivitiesService } from '../services/activities.service';

import { Client } from './clients';
import { Project } from './projects';
import { Revenue } from './revenue';
import { MonthlyTotals } from './monthly-totals';
import { Activity } from './activity';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.less']
})
export class UserDashboardComponent implements OnInit {

  constructor(private revenueService: RevenueService, private clientService : ClientsService, private projectService : ProjectsService, 
    private monthlytotalsService : MonthlyTotalsService, private activitiesService: ActivitiesService) { }
  //client shape to expect
  client : Client;

  project : Project;
  monthly_totals : MonthlyTotals;
  revenue : Revenue;
  activity: Activity;
  //default check if totals have been loaded
  totalIsLoaded = false;
  //check if revenue has loaded
  revenueIsLoaded = false;
  //default check if activities have loaded
  activitiesAreLoaded = false;
  //years for dropdown
  years = [];
  //default selected dropdown value for revenue year & convert date to string
  selected = '2019';//new Date().getFullYear().toString();

  //Get clients 
  getClients(): void {
    this.clientService.getClients()
    .subscribe(client => {this.client = client});
  }
  //Get monthly totals 
  getTotals(): void {
    this.monthlytotalsService.getTotals()
    .subscribe(monthly_totals => {this.monthly_totals = monthly_totals; this.totalIsLoaded = true;});
  }
  //get projects
  getProjects() : void {
    this.projectService.getProjects()
    .subscribe(project=>{this.project = project});
  }
  //get activities
  getActivities() : void {
    this.activitiesService.getActivities()
    .pipe(
      map(activity => {
        for(let a of activity[Symbol.iterator]()){
          this.doughnutChartAttributes.data.push(a.no_activities);
          this.doughnutChartAttributes.labels.push(a.team);
        }
      })
    )
    .subscribe(activities=>{
      this.doughnutChartDetails();
      //activities have loaded
      this.activitiesAreLoaded = true;
    });
  }  
  //Get revenue
  getLineChartValues() : void {
    this.revenueService.getRevenue()
    .pipe(
      map(data => {
        for(let i of data[Symbol.iterator]()){
          this.years.push(i.year);
          if(i.year == this.selected){
            for(let x of i.monthly_totals){
              if(x.amount !== null){
                this.chartData.push(x.amount);
              }
            }
          }
        }
      })
    )
    .subscribe(revenue => { 
      //Revenue has loaded
      this.revenueIsLoaded = true; 
      //Render Line Chart
      this.lineChartDetails();
    });
  }
 
  @ViewChild('myCanvas', {static: true}) private chartRef;
  chart = [];
  month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  chartData = [];
  yAxisMax : number;

  lineChartDetails() {
    this.chart = new Chart(this.chartRef.nativeElement,{
    type: 'line',
        data: {
          labels: this.month,
          datasets: [
            {
              data: this.chartData,
              borderColor: '#3cba9f',
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: true,
              }
            }],
          }
        }
        });
  }

  @ViewChild('doughnutCanvas', {static: true}) private doughnutChartRef;
  doughnutChart = [];
  doughnutChartAttributes = {
    data:[],
    labels:[],
    backgroundColor:['rgb(89,116,255)','rgb(57,221,158)','rgb(245,84,102)','rgb(254,213,97)'],
  };

  doughnutChartDetails() {
   this.doughnutChart = new Chart(this.doughnutChartRef.nativeElement, {
    type: 'doughnut',
    data: {
      labels: this.doughnutChartAttributes.labels,
      datasets: [{
        data: this.doughnutChartAttributes.data,
        backgroundColor: this.doughnutChartAttributes.backgroundColor,
        hoverBorderWidth: 5,
        //hoverBackgroundColor: this.doughnutChartAttributes.backgroundColor,
        hoverBorderColor: this.doughnutChartAttributes.backgroundColor,
      }],
    },
    options: {
      animation: {

      },
      rotation: -0.6*Math.PI,
      legend: {
        position:'right',
      },
    }
  });
  }
   

  updateChartDetails() {
   // this.chart.update();
  }

  ngOnInit() {
    this.getClients();
    this.getTotals();
    this.getLineChartValues();
    this.getProjects();
    this.getActivities();
  }

}