import { Component, Input, OnInit } from '@angular/core';
import { PanelService } from '../panel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public tasks = [];

  constructor(private panelService: PanelService) {
    panelService.getPanel().subscribe((data : any) => { this.tasks = data.tasks });
  }

  ngOnInit(): void {
  }

}
