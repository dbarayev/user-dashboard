import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  avatar = 'assets/avatar.jpg';
  fullname = 'Dmitriy Barayev';
  notificationClicked : boolean = false;
  arrowFlip : boolean = false;
  bellClick : boolean = false;
  newNotifications : boolean = true;
  notificationCounter : number = 1;

  //Notification clicked
  notificationClickChange() : void {
    this.notificationClicked = !this.notificationClicked;
    //If there are no notifications, set newNotifications = false, else set it to true
    this.notificationCounter === 0 ? this.newNotifications = false : this.newNotifications = true;
  }

  //User Menu arrow clicked
  arrowClicked() : void {
    this.arrowFlip = !this.arrowFlip;
  }
  //User clears notification
  notificationClosed() : void {
    this.notificationCounter -= 1;
    console.log(this.notificationCounter);
  }



  ngOnInit() {
  }

}
