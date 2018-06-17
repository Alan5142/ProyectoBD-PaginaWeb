import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RegistrarEsComponent} from './registrar-es.component';

describe('RegistrarEsComponent', () =>
{
    let component: RegistrarEsComponent;
    let fixture: ComponentFixture<RegistrarEsComponent>;
    
    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({
            declarations : [RegistrarEsComponent]
        })
               .compileComponents();
    }));
    
    beforeEach(() =>
    {
        fixture = TestBed.createComponent(RegistrarEsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
    it('should create', () =>
    {
        expect(component).toBeTruthy();
    });
});
