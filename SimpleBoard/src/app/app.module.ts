import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {TaskWriteComponent} from './component/common/task-write/task-write.component';
import {MainComponent} from './component/container/main/main.component';
import {WriteComponent} from './component/container/write/write.component';
import {HeaderComponent} from './component/container/header/header.component';
import {FooterComponent} from './component/container/footer/footer.component';
import {SharedService} from "./service/shared.service";
import {CategoryGuardService} from "./service/guard/category.guard.service";
import {TaskListComponent} from './component/common/task-list/task-list.component';
import {TaskDetailComponent} from './component/common/task-detail/task-detail.component';
import {TaskService} from './service/task.service';
import {ConfigService} from "./service/config.service";
import { TaskDeleteComponent } from './component/common/task-delete/task-delete.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        WriteComponent,
        HeaderComponent,
        FooterComponent,
        TaskListComponent,
        TaskDetailComponent,
        TaskWriteComponent,
        TaskDeleteComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {path: '', redirectTo: 'board/free/main', pathMatch: 'full'},
            {
                path: 'board/:category',
                children: [
                    {path: '', redirectTo: 'main', pathMatch: 'full'},
                    {path: 'main', component: MainComponent, canActivate: [CategoryGuardService]},
                    {path: 'main/:id', component: MainComponent, canActivate: [CategoryGuardService]},
                    {path: 'write', component: WriteComponent, canActivate: [CategoryGuardService]},
                ]
            }
        ])
    ],
    providers: [
        SharedService,
        CategoryGuardService,
        TaskService,
        ConfigService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
