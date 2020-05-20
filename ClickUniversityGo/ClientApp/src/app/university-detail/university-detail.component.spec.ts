/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { UniversityDetailComponent } from './university-detail.component';

let component: UniversityDetailComponent;
let fixture: ComponentFixture<UniversityDetailComponent>;

describe('university-detail component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ UniversityDetailComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(UniversityDetailComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});