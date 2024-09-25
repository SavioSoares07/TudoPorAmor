import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const hamburger = document.getElementById('hamburger') as HTMLElement;
      const menu = document.getElementById('menu') as HTMLElement;

      if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
          menu.classList.toggle('active');
          hamburger.classList.toggle('open');

          // Animação para o botão do hambúrguer
          hamburger.querySelectorAll('.line').forEach((line, index) => {
            const lineElement = line as HTMLElement;
            if (hamburger.classList.contains('open')) {
              lineElement.style.transform =
                index === 0
                  ? 'rotate(45deg) translate(8px, 8px)'
                  : index === 1
                  ? 'opacity(0)'
                  : 'rotate(-45deg) translate(8px, -8px)';
            } else {
              lineElement.style.transform = 'none';
            }
          });
        });
      }
    }
  }
}
