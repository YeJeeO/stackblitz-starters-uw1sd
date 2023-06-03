import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { PageSiteComponent } from './page-site/page-site.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule,PageSiteComponent],
  template: `
    
<app-page-site></app-page-site>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
