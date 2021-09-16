import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { LearningComponent } from './learning/learning.component';
import { BotLearningComponent } from './bot-learning/bot-learning.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'chat', component: ChatComponent },
  { path: 'learning', component: LearningComponent },
  { path: 'botlearning', component: BotLearningComponent },
  { path: '**', redirectTo: 'home'},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
