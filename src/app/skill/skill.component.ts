import { Component } from '@angular/core';
import { LangComponent } from './lang/lang.component';

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  lang = LangComponent;
}
