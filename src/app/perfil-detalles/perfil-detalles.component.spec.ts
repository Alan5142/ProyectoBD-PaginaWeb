import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PerfilDetallesComponent} from './perfil-detalles.component';

describe('PerfilDetallesComponent', () =>
{
    let component: PerfilDetallesComponent;
    let fixture: ComponentFixture<PerfilDetallesComponent>;
    
    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({
            declarations : [PerfilDetallesComponent]
        })
               .compileComponents();
    }));
    
    beforeEach(() =>
    {
        fixture = TestBed.createComponent(PerfilDetallesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
    it('should create', () =>
    {
        expect(component).toBeTruthy();
    });
});
