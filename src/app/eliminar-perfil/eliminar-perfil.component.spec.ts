import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EliminarPerfilComponent} from './eliminar-perfil.component';

describe('EliminarPerfilComponent', () =>
{
    let component: EliminarPerfilComponent;
    let fixture: ComponentFixture<EliminarPerfilComponent>;
    
    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({
            declarations : [EliminarPerfilComponent]
        })
               .compileComponents();
    }));
    
    beforeEach(() =>
    {
        fixture = TestBed.createComponent(EliminarPerfilComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
    it('should create', () =>
    {
        expect(component).toBeTruthy();
    });
});
