import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() { }
  
  createDb() {
    const totals = [
      {
        user_id: 1,
        month: '1',
        year: '2020',
        project_budget: 87360,
        revenue: 11440,
        leads: 55680,
        quoted: 75290,
        outstanding_invoices: 3976
      }
    ];

    const clients = [
      {
        id: 1,
        name: 'Capital Inc.'
      },
      {
        id: 2,
        name: 'Optimal Group'
      },
      {
        id: 3,
        name: 'Deyamox Ltd.'
      }
    ];
    const projects = [
      {
        project_no: 1,
        client_id: 1,
        name: 'Redesign for Capital Inc.',
        year: '2020',
        deadline: '03/28/2020',
        budget: 64037.21,
        status: 'In Progress'
      },
      {
        project_no: 2,
        client_id: 2,
        name: 'SEO for Optimal Group',
        year: '2020',
        deadline: '05/01/2020',
        budget: 45398.16,
        status: 'In Progress'
      },
      {
        project_no: 3,
        client_id: 3,
        name: 'Marketing Campaign for Deyamox Ltd.',
        year: '2020',
        deadline: '09/24/2020',
        budget: 23679.54,
        status: 'On Hold'
      }
    ];
    const revenue = [
      {
        year: '2018',
        monthly_totals: [{
          month: '1',
          amount: null
        },
        {
          month: '2',
          amount: null
        },
        {
          month: '3',
          amount: null
        },
        {
          month: '4',
          amount: null
        },
        {
          month: '5',
          amount: null
        },
        {
          month: '6',
          amount: null
        },
        {
          month: '7',
          amount: null
        },
        {
          month: '8',
          amount: null
        },
        {
          month: '9',
          amount: null
        },
        {
          month: '10',
          amount: null
        },
        {
          month: '11',
          amount: null
        },
        {
          month: '12',
          amount: null
        }]
      },
      {
        year: '2019',
        monthly_totals: [{
          month: '1',
          amount: 0
        },
        {
          month: '2',
          amount: 3000
        },
        {
          month: '3',
          amount: 10000
        },
        {
          month: '4',
          amount: 10000
        },
        {
          month: '5',
          amount: 20000
        },
        {
          month: '6',
          amount: 20000
        },
        {
          month: '7',
          amount: 10000
        },
        {
          month: '8',
          amount: 10000
        },
        {
          month: '9',
          amount: 20000
        },
        {
          month: '10',
          amount: 25000
        },
        {
          month: '11',
          amount: 28000
        },
        {
          month: '12',
          amount: 30000
        }]
      },
      {
        year: '2020',
        monthly_totals: [{
          month: '1',
          amount: 30000
        },
        {
          month: '2',
          amount: 40000
        },
        {
          month: '3',
          amount: null
        },
        {
          month: '4',
          amount: null
        },
        {
          month: '5',
          amount: null
        },
        {
          month: '6',
          amount: null
        },
        {
          month: '7',
          amount: null
        },
        {
          month: '8',
          amount: null
        },
        {
          month: '9',
          amount: null
        },
        {
          month: '10',
          amount: null
        },
        {
          month: '11',
          amount: null
        },
        {
          month: '12',
          amount: null
        }]
      }
    ];
    const activities = [
      {
        team: 'Technology',
        no_activities: 50000
      },
      {
        team: 'PMO',
        no_activities: 20000
      },
      {
        team: 'Marketing',
        no_activities: 10000
      },
      {
        team: 'Sales',
        no_activities: 6000
      }
    ]; 
    const members = [
      {
        uid: 1,
        fname: 'Sundar',
        lname: ' Pichai',
        avatar_url: 'assets/sundar_pichai.jpg',
        job_title: 'CEO',
        completed_hours: 110,
        total_hours: 150
      },
      {
        uid: 2,
        fname: 'Larry',
        lname: 'Page',
        avatar_url: 'assets/larry_page.jpg',
        job_title: 'Co-Founder',
        completed_hours: 75,
        total_hours: 150
      },
      {
        uid: 3,
        fname: 'Sergey',
        lname: 'Brin',
        avatar_url: 'assets/sergey_brin.jpg',
        job_title: 'Co-Founder',
        completed_hours: 38,
        total_hours: 150
      },
      {
        uid: 4,
        fname: 'John',
        lname: 'Hennessy',
        avatar_url: 'assets/john_hennessy.jpg',
        job_title: 'Chair',
        completed_hours: 48,
        total_hours: 150
      },
      {
        uid: 5,
        fname: 'Ruth',
        lname: 'Porat',
        avatar_url: 'assets/ruth_porat.jpg',
        job_title: 'CFO',
        completed_hours: 100,
        total_hours: 150
      }
    ];
    return { totals, clients, projects, revenue, activities, members };
  }

}