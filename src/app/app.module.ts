import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyC01Component } from './myc01';
import { MyComponent02 } from './myc02';
import { Myc03Component } from './myc03/myc03.component';
import { Myc04Component } from './myc04/myc04.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ViewParentComponent } from './view-parent/view-parent.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { PrecticeDirectiveDirective } from './prectice-directive.directive';
import { TodolistComponent } from './todolist/todolist.component';
import { AgePipe } from './todolist/age.pipe';
import { ArmyPipe } from './todolist/arm.pipe';
import { HttpClientModule } from '@angular/common/http';
import { Myc05Component } from './myc05/myc05.component';
import { BlogHeaderComponent } from './blog/blog-header/blog-header.component';
import { BlogContentComponent } from './blog/blog-content/blog-content.component';
import { BlogFooterComponent } from './blog/blog-footer/blog-footer.component';
import { BlogComponent } from './blog/blog.component'

@NgModule({
  declarations: [
    AppComponent,
    MyC01Component,
    MyComponent02,
    Myc03Component,
    Myc04Component,
    ViewChildComponent,
    ViewParentComponent,
    NgIfComponent,
    NgModelComponent,
    PrecticeDirectiveDirective,
    TodolistComponent,
    AgePipe,
    ArmyPipe,
    Myc05Component,
    BlogHeaderComponent,
    BlogContentComponent,
    BlogFooterComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
