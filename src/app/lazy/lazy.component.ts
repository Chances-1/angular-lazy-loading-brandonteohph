import { OnInit, Component } from '@angular/core';

@Component({
    selector: 'app-lazy-component',
    templateUrl: './lazy.component.html',
})
export class LazyComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}