import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InformacionEmpleadoComponent} from './informacion-empleado.component';

describe('InformacionEmpleadoComponent', () =>
{
    let component: InformacionEmpleadoComponent;
    let fixture: ComponentFixture<InformacionEmpleadoComponent>;
    
    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({
            declarations : [InformacionEmpleadoComponent]
        })
               .compileComponents();
    }));
    
    beforeEach(() =>
    {
        fixture = TestBed.createComponent(InformacionEmpleadoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
    it('should create', () =>
    {
        expect(component).toBeTruthy();
    });
});
