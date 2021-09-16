import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  NbIconModule, 
  NbLayoutModule, 
  NbMenuModule, 
  NbSidebarModule, 
  NbThemeModule, 
  NbChatModule, 
  NbCardModule, 
  NbButtonModule,
  NbStepperModule,
  NbInputModule} from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { ChatService } from './chat/chat.service';
import { LearningComponent } from './learning/learning.component';
import { BotLearningComponent } from './bot-learning/bot-learning.component';
import { LearningSourceComponent } from './learning-source/learning-source.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BotLearningSourceComponent } from './bot-learning-source/bot-learning-source.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent,
    LearningComponent,
    BotLearningComponent,
    LearningSourceComponent,
    BotLearningSourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,               
    NbSidebarModule.forRoot(),  
    NbMenuModule.forRoot(), 
    NbChatModule.forRoot(),
    NbCardModule,
    NbButtonModule,
    NbCardModule,
    NbStepperModule,
    ReactiveFormsModule,  
    NbInputModule 
  ],
  providers: [ChatService],
  bootstrap: [AppComponent],
  exports: [LearningSourceComponent]
})
export class AppModule { }
