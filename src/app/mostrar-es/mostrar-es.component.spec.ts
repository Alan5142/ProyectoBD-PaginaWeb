import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MostrarEsComponent} from './mostrar-es.component';

describe('MostrarEsComponent', () =>
{
    let component: MostrarEsComponent;
    let fixture: ComponentFixture<MostrarEsComponent>;
    
    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({
            declarations : [MostrarEsComponent]
        })
               .compileComponents();
    }));
    
    beforeEach(() =>
    {
        fixture = TestBed.createComponent(MostrarEsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
    it('should create', () =>
    {
        expect(component).toBeTruthy();
    });
});
