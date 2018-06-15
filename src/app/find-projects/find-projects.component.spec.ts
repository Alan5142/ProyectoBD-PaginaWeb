import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FindProjectsComponent} from './find-projects.component';

describe('FindProjectsComponent', () =>
{
    let component: FindProjectsComponent;
    let fixture: ComponentFixture<FindProjectsComponent>;
    
    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({
            declarations : [FindProjectsComponent]
        })
               .compileComponents();
    }));
    
    beforeEach(() =>
    {
        fixture = TestBed.createComponent(FindProjectsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
    it('should create', () =>
    {
        expect(component).toBeTruthy();
    });
});
