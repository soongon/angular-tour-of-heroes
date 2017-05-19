import {Component, OnInit} from '@angular/core';
import {Hero} from './shared/model/hero.model';
import {HeroService} from './shared/service/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}



