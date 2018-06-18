import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
    selector : 'app-dashboard',
    templateUrl : './dashboard.component.html',
    styleUrls : ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit
{
    
    constructor (private rd: Renderer2)
    {
    }
    
    ngOnInit ()
    {
    }
    
}
