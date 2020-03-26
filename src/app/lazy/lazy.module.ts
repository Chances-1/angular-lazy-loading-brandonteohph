import { LazyComponent } from './lazy.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [LazyComponent],
    exports: [LazyComponent],
    imports: [CommonModule]
})
export class LazyModule {
    static components = {
        component: LazyComponent,
    };
}