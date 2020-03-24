import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PopoverMenuComponent } from './popover-menu/popover-menu.component';
import { HeaderComponent, ContentContainerComponent, AboutModalComponent, DataPrivacyModalComponent, ImprintModalComponent } from './cmps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    PopoverMenuComponent,
    HeaderComponent,
    ContentContainerComponent,
    AboutModalComponent,
    DataPrivacyModalComponent,
    ImprintModalComponent
  ],
  declarations: [
    PopoverMenuComponent,
    HeaderComponent,
    ContentContainerComponent,
    AboutModalComponent,
    DataPrivacyModalComponent,
    ImprintModalComponent
  ]
})
export class CommonsModule { }
