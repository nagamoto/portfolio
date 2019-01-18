import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillComponent } from './skill/skill.component';
import { LangComponent } from './skill/lang/lang.component';
import { DataStoreComponent } from './skill/data-store/data-store.component';
import { ToolsComponent } from './skill/tools/tools.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillComponent,
    LangComponent,
    DataStoreComponent,
    ToolsComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
