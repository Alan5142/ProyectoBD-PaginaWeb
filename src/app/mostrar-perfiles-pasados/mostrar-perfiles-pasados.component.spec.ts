import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MostrarPerfilesPasadosComponent} from './mostrar-perfiles-pasados.component';

describe('MostrarPerfilesPasadosComponent', () =>
{
    let component: MostrarPerfilesPasadosComponent;
    let fixture: ComponentFixture<MostrarPerfilesPasadosComponent>;
    
    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({
            declarations : [MostrarPerfilesPasadosComponent]
        })
               .compileComponents();
    }));
    
    beforeEach(() =>
    {
        fixture = TestBed.createComponent(MostrarPerfilesPasadosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
    it('should create', () =>
    {
        expect(component).toBeTruthy();
    });
});
