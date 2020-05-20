/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { UniversitiesComponent } from './universities.component';

let component: UniversitiesComponent;
let fixture: ComponentFixture<UniversitiesComponent>;

describe('universities component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ UniversitiesComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(UniversitiesComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});