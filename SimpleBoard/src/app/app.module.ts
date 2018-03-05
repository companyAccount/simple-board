import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {TaskViewComponent} from './component/common/task-view/task-view.component';
import {TaskWriteComponent} from './component/common/task-write/task-write.component';
import {MainComponent} from './component/container/main/main.component';
import {WriteComponent} from './component/container/write/write.component';
import {HeaderComponent} from './component/container/header/header.component';
import {FooterComponent} from './component/container/footer/footer.component';
import {SharedService} from "./service/shared.service";
import {CategoryGuardService} from "./service/guard/category.guard.service";

@NgModule({
    declarations: [
        AppComponent,
        TaskViewComponent,
        TaskWriteComponent,
        MainComponent,
        WriteComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {path: '', redirectTo: 'main/free', pathMatch: 'full'},
            {path: 'main/:category', component: MainComponent, canActivate: [CategoryGuardService]},
            {path: 'write/:category', component: WriteComponent}
        ])
    ],
    providers: [
        SharedService,
        CategoryGuardService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
