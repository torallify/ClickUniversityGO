/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { UserProfileDetailComponent } from './user-profile-detail.component';

let component: UserProfileDetailComponent;
let fixture: ComponentFixture<UserProfileDetailComponent>;

describe('user-profile-detail component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ UserProfileDetailComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(UserProfileDetailComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});