import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionNewComponent } from './question-new/question-new.component';
import { QuestionComponent } from './question/question.component';
import { AnswerNewComponent } from './answer-new/answer-new.component';



const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: LandingComponent,
        children: []
    },
    {
        path: 'dashboard',
        pathMatch: 'full',
        component: DashboardComponent,
        children: []
    },
    {
        path: 'question/new',
        pathMatch: 'full',
        component: QuestionNewComponent,
        children: []
    },
    {
        path: 'question/:id',
        pathMatch: 'full',
        component: QuestionComponent,
        children: []
    },
    {
        path: 'answer/:id',
        pathMatch: 'full',
        component: AnswerNewComponent,
        children: []
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }