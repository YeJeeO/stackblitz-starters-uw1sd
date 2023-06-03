import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-site',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './page-site.component.html',
  styleUrls: ['./page-site.component.css'],
})
export class PageSiteComponent {
  name = 'KimTime';
  condition: boolean = true;
  toggle() {
    this.condition = !this.condition;
  }

  state = true;
  toggleState() {
    this.state = !this.state;
  }
  itemImageUrl =
    'https://drasler.ru/wp-content/uploads/2019/05/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D1%82%D0%B0%D0%BD%D1%86%D1%8B-%D0%BD%D0%B0-%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9-%D1%81%D1%82%D0%BE%D0%BB-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-25.jpg';
  items = ['Hip-Hop', 'R&B', 'Modern', 'Street'];
  span =
    'Танцевальная студия Kim Time, г. Новосибирск. Обладатель Гран-при всероссийских и международных фестивалей и конкурсов.';
  P = 'г.Новосибирск, ул. Планировочная, д. 58';
  today = new Date();

  constructor() {}
}
