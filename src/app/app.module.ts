import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './modules/user/user.module';
import { MeetingModule } from './modules/meeting/meeting.module';
import { UserService } from './services/user.service';
import { MeetingService } from './services/meeting.service';
import { HttpClientModule } from '@angular/common/http';

 
import { ButtonModule } from "primeng/button";
 import {ToastModule} from 'primeng/toast';
 import { ToolbarModule } from 'primeng/toolbar';
 import { FileUploadModule } from 'primeng/fileupload';
 import { TableModule } from 'primeng/table';
 import {DialogModule} from 'primeng/dialog';
 import { ConfirmDialogModule } from 'primeng/confirmdialog';
 import { InputTextareaModule } from 'primeng/inputtextarea';

 import {CheckboxModule} from 'primeng/checkbox';
// import {CalendarModule} from 'primeng/calendar';
// import {SliderModule} from 'primeng/slider';
// import {MultiSelectModule} from 'primeng/multiselect';
// import {ContextMenuModule} from 'primeng/contextmenu';
// import {ButtonModule} from 'primeng/button';
// import {DropdownModule} from 'primeng/dropdown';
// import {ProgressBarModule} from 'primeng/progressbar';
 import {InputTextModule} from 'primeng/inputtext';
// import {FileUploadModule} from 'primeng/fileupload';
// import {RatingModule} from 'primeng/rating';
// import {RadioButtonModule} from 'primeng/radiobutton';
 import {InputNumberModule} from 'primeng/inputnumber';

// import { ConfirmationService } from 'primeng/api';
// import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    UserModule,
    MeetingModule,
    HttpClientModule,
    TableModule,
		DialogModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    HttpClientModule,
    FileUploadModule,
    ToolbarModule,
    FormsModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,CheckboxModule
  ],
  exports:[ToastModule],
  providers: [UserService,MeetingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
