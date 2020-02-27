import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RectCardComponent } from './components/rect-card/rect-card.component';
import { SectionComponent } from './components/section/section.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@NgModule({
  declarations: [RectCardComponent, SectionComponent, ProgressBarComponent],
  exports: [RectCardComponent, SectionComponent, ProgressBarComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
