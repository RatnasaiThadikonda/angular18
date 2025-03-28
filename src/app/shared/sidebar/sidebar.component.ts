import { transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  // animations: [
  //   trigger('slideInOut', [
  //     state('in', style({ transform: 'translateX(0%)' })),
  //     state('out', style({ transform: 'translateX(-100%)' })),
  //     transition('in <=> out', animate('300ms ease-in-out')),
  //   ]),
  // ],
})
export class SidebarComponent {
  @Input() isOpen = false;
  @Output() closeSidebarEvent = new EventEmitter<void>();

  menuItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  closeSidebar() {
    this.closeSidebarEvent.emit();
  }
}


