import { Component, Input, ViewEncapsulation } from '@angular/core';

export class LinkItem {
  show: boolean = false;

  constructor(
    public name: string,
    public icon: null | { type: "fa" | "img", icon: string } = null,
    public href: null | string = null,
    public children: LinkItem[] = null,
  ) { }
}

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuItemComponent {
  @Input() links: LinkItem[];
}
