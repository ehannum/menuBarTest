import { Component, OnInit, Input } from '@angular/core';
import { ButtonGroupsService } from '../button-groups.service'

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})

export class MenuButtonComponent {

  selected: boolean;

  @Input('name') name: string;
  @Input('icon') icon: string;
  @Input('toggle') toggle: string;

  constructor (private buttonGroups: ButtonGroupsService) { }

  ngOnInit() {
    this.buttonGroups.group.subscribe(res => {
      this.selected = res[this.toggle] === this.name;
    });
  }

  buttonClick() {
    if (this.toggle && this.toggle.length) {
      this.buttonGroups.group[this.toggle] = this.name;

    } else if (this.toggle === '') {
      this.selected = !this.selected;

    } else {
      this.selected = true;
      setTimeout(() => {
        this.selected = false;
      }, 100);
    }
  }

  isSelected = function () {
    if (this.toggle && this.toggle.length) {
      return this.buttonGroups.group[this.toggle] === this.name;
    }
    return this.selected;
  };

}
