import { Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { MainComponent } from './main/main.component';
import { NaginatorComponent } from './components/naginator/naginator.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { IconDropdownComponent } from './components/icon-dropdown/icon-dropdown.component';
import { ImageSelectorComponent } from './components/image-selector/image-selector.component';
import { InputColorComponent } from './components/input-color/input-color.component';
import { SelectComponent } from './components/select/select.component';
import { InputComponent } from './components/input/input.component';
import { TextComponent } from './components/text/text.component';
import { ButtonComponent } from './components/button/button.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { IconComponent } from './components/icon/icon.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'card',
    component: CardComponent,
  },
  {
    path: 'naginator',
    component: NaginatorComponent,
  },
  {
    path: 'paginator',
    component: PaginatorComponent,
  },
  {
    path: 'icon-dropdown',
    component: IconDropdownComponent,
  },
  {
    path: 'image-selector',
    component: ImageSelectorComponent,
  },
  {
    path: 'input-color',
    component: InputColorComponent,
  },
  {
    path: 'select',
    component: SelectComponent,
  },
  {
    path: 'input',
    component: InputComponent,
  },
  {
    path: 'text',
    component: TextComponent,
  },
  {
    path: 'button',
    component: ButtonComponent,
  },
  {
    path: 'date-picker',
    component: DatepickerComponent,
  },
  {
    path: 'icon',
    component: IconComponent,
  },
  {
    path: 'checkbox',
    component: CheckboxComponent,
  },
];
