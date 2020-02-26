import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RectCardComponent } from './components/rect-card/rect-card.component';
import { SectionComponent } from './components/section/section.component';

@NgModule({
  declarations: [RectCardComponent, SectionComponent],
  exports: [RectCardComponent, SectionComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
