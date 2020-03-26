import { Component, Type } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loaded = false;
  myComponent?: Type<any>

  toggleLazy = true;
  toggleHarder = false;
  loadLazy() {
    import('./lazy/lazy.module')
        .then(mod => mod.LazyModule)
        .then(lazyModule => {
            this.myComponent = lazyModule.components['component'];
            this.loaded = true;
        });
  }
  loadHarder() {
    import('./harder/harder.module')
        .then(mod => mod.HarderModule)
        .then(harderModule => {
            this.myComponent = harderModule.components['component'];
            this.loaded = true;
        });
  }

  toggleLazyHarder(){
    this.toggleLazy = !this.toggleLazy;
    this.toggleHarder = !this.toggleHarder;
  }
}
