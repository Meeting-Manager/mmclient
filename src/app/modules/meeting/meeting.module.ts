import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleMeetingComponent } from './single-meeting/single-meeting.component';
import { UserMeetingsComponent } from './user-meetings/user-meetings.component';


import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {FileUploadModule} from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';

import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';

import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';

import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';



                                               
@NgModule({
  declarations: [
    SingleMeetingComponent,
    UserMeetingsComponent  ],
  imports: [
    CommonModule,TableModule,HttpClientModule,ReactiveFormsModule,ToastModule,
		DialogModule,FormsModule,	BrowserModule,BrowserAnimationsModule,RouterModule,CheckboxModule,
    InputTextModule,
    FileUploadModule,
    ToolbarModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule, 
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
  ],
  exports:[ SingleMeetingComponent,
    UserMeetingsComponent],

  bootstrap:    [ UserMeetingsComponent ],
  providers: [ MessageService, ConfirmationService]
})
export class MeetingModule { }
