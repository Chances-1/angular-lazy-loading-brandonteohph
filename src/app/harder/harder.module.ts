import { HarderComponent } from './harder.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [HarderComponent],
    exports: [HarderComponent],
    imports: [CommonModule]
})
export class HarderModule {
    static components = {
        component: HarderComponent,
    };
}