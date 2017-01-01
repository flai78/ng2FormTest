import {Component} from '@angular/core';
import { MyModel } from '../models/mymodel.model';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  mySelectList = ['val1','val2','val3'];
  model = new MyModel('Fili','Lai',true,'val1','val2');
}
