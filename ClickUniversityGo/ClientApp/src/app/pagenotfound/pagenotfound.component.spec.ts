/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { PagenotfoundComponent } from './pagenotfound.component';

let component: PagenotfoundComponent;
let fixture: ComponentFixture<PagenotfoundComponent>;

describe('pagenotfound component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PagenotfoundComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(PagenotfoundComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});