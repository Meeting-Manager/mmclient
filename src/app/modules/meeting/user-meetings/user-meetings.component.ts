//import { getFips } from 'crypto';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Meeting } from 'src/app/models/meeting.models';
import { MeetingService } from 'src/app/services/meeting.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-user-meetings',
  templateUrl: './user-meetings.component.html',
  styles: [`
        :host ::ng-deep .p-dialog .meeting-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
    styleUrls: ['./user-meetings.component.scss'],

    providers: [MessageService,ConfirmationService]
})
export class UserMeetingsComponent implements OnInit {

  meetingDialog!: boolean;

  meetings!: Meeting[];

  meeting!: Meeting;

  selectedmeetings!: Meeting[];

  submitted: boolean | undefined;

  statuses!: any[];
 
  constructor(private meetingService: MeetingService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.meetingService.getMeetingList().subscribe(data => {
        this.meetings = data;
        console.log(data);
    });

     
  }
  openNew() {
    this.meeting = new Meeting(0,new Date(),"","");
    this.submitted = false;
    this.meetingDialog = true;
}

deleteSelectedmeetings() {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete the selected meetings?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.meetings = this.meetings.filter(val => !this.selectedmeetings.includes(val));
            this.selectedmeetings = [];
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'meetings Deleted', life: 3000});
        }
    });
}

editmeeting(meeting: Meeting) {
    this.meeting = {...meeting};
    this.meetingDialog = true;
}

deletemeeting(meeting: Meeting) {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete ' + meeting.meetingName + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.meetings = this.meetings.filter(val => val.id !== meeting.id);
            this.meeting = new Meeting(0,new Date(),"","");
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'meeting Deleted', life: 3000});
        }
    });
}

hideDialog() {
    this.meetingDialog = false;
    this.submitted = false;
}

savemeeting() {
    this.submitted = true;

    if (this.meeting.meetingName.trim()) {
        if (this.meeting.id!=0) {
            this.meetings[this.findIndexById(this.meeting.id)] = this.meeting;
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'meeting Updated', life: 3000});
        }
        else {
            this.meeting.id = this.createId();
            this.meetings.push(this.meeting);
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'meeting Created', life: 3000});
        }

        this.meetings = [...this.meetings];
        this.meetingDialog = false;
        this.meeting = new Meeting(0,new Date(),"","");
    }
}

findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.meetings.length; i++) {
        if (this.meetings[i].id == id) {
            index = i;
            break;
        }
    }

    return index;
}

createId(): number {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < 5; i++ ) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return Number(id);
}

}

  
