import { AsyncPipe, NgIf, NgTemplateOutlet, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent, SidebarComponent } from './core';


@Component({
  selector: 'layout-root',
  standalone: true,
  imports: [
    NgIf, NgTemplateOutlet, AsyncPipe, NgStyle,
    RouterOutlet,
    NavbarComponent, SidebarComponent
  ],
  template: `
    <div class="wrapper" [class.fullscreen]="fullscreen">
      <div class="sidebar" data-color="white" data-active-color="danger" *ngIf="!fullscreen">
        <app-sidebar-cmp />
      </div>

      <div class="main-panel" >
        <app-navbar-cmp *ngIf="!fullscreen" />

        <div class="content">

          <router-outlet />

        </div>

        <footer></footer>
      </div>
    </div>
  `,
  styles: [`
    .fullscreen {
      .main-panel {
        float: left;
        margin: 0;
        width: 100%;
      }

      .content {
        margin: 0;
        padding: 0;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
      }
    }
  `]
})
export class LayoutComponent {
  @Input() fullscreen = false;
}
