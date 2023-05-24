import { Component, ElementRef, Input, Pipe, PipeTransform, SecurityContext, ViewChild, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'mfe-iframe',
  standalone: true,
  template: `<iframe [src]="safeUrl" class="mfe-iframe" #iframe></iframe>`,
  styles: [`
    :host {
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: column;
    }

    .mfe-iframe {
      flex-grow: 1;
      border: none;
      margin: 0;
      padding: 0;
    }
  `]
})
export class MfeIframeComponent {
  sanitizer = inject(DomSanitizer);
  #url = '';
  @Input() set url(url: string) {
    this.#url = url;
  }
  get safeUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.#url.split('.').join('/') +
      '?fullscreen=true'
    );
  }
}
