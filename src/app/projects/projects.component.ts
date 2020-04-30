import { Component, OnInit } from '@angular/core';
import { MembersService } from '../services/members.service';
import { Member } from './members';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {

  constructor(private memberService: MembersService) { }
  member : Member;

  drawProgressBarCircle() : void {
    
  }

  //get Members
  getMembers() : void {
    this.memberService.getMembers()
    .subscribe(member => { this.member = member; });
  }

  ngOnInit() {
    this.getMembers();
    this.drawProgressBarCircle();
  }

}
