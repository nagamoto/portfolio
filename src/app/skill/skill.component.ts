import { Component } from '@angular/core';
import { LangComponent } from './lang/lang.component';
import { DataStoreComponent } from './data-store/data-store.component';
import { ToolsComponent } from './tools/tools.component';

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  lang = LangComponent;
  dataStore = DataStoreComponent;
  tools = ToolsComponent;
}
