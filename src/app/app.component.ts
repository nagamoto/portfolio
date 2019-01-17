import { Component } from '@angular/core';
import { SkillComponent } from './skill/skill.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  skill = SkillComponent;
}
