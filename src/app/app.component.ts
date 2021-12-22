import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
  public color:string="";
  public a:string="";
 



  public colours:Array<any>=[
    {tcolor:'pink'},
    {tcolor:'yellow'},
    {tcolor:'red'},
    {tcolor:'green'},
    {tcolor:'orange'}
  ]
}
