///// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { QandaDetailComponent } from './qanda-detail.component';

let component: QandaDetailComponent;
let fixture: ComponentFixture<QandaDetailComponent>;

describe('qanda-detail component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ QandaDetailComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(QandaDetailComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
