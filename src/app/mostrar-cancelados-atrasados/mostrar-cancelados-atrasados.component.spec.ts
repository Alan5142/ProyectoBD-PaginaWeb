import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MostrarCanceladosAtrasadosComponent} from './mostrar-cancelados-atrasados.component';

describe('MostrarCanceladosAtrasadosComponent', () =>
{
    let component: MostrarCanceladosAtrasadosComponent;
    let fixture: ComponentFixture<MostrarCanceladosAtrasadosComponent>;
    
    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({
            declarations : [MostrarCanceladosAtrasadosComponent]
        })
               .compileComponents();
    }));
    
    beforeEach(() =>
    {
        fixture = TestBed.createComponent(MostrarCanceladosAtrasadosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
    it('should create', () =>
    {
        expect(component).toBeTruthy();
    });
});
