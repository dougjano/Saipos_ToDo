import {Component, NgModule, OnInit} from '@angular/core';
import {List, ListInterface} from '../../model/list/list';
import { MovementIntf } from '../../model/card/movement';
import {BoardModel} from '../../model/board/board';
import { PanelService } from '../../../panel.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AuthDialogComponent } from '../../auth-dialog/auth-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {

  private service: PanelService;
  lists: ListInterface[];

  constructor(private panelService: PanelService, public dialog: MatDialog) { this.service = panelService }

  ngOnInit() {

    this.lists = [];

    this.addList('Unfinished');
    this.addList('Finished');

  }
  
  idleClick(){
    this.panelService.postRandomize();
    this.ngOnInit();    
  }

  addList(name) {
    const newList: ListInterface = new List();
    newList.position = this.lists.length + 1;
    newList.name = `${name}`;
    if (this.lists === undefined) {
      this.lists = [];
    }
    this.lists.push(newList);
  }

  moveCardAcrossList(movementInformation: MovementIntf) {
    const dialogRef = this.dialog.open(AuthDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.panelService.getAuth(result).then(result2 =>{
        if(result2.status == 200){

          const cardMoved = this.lists[movementInformation.fromListIdx].cards.splice(movementInformation.fromCardIdx, 1);
          this.lists[movementInformation.toListIdx].cards.splice(movementInformation.toCardIdx , 0 , ...cardMoved);

          this.panelService.postPanel(cardMoved[0].id).then(result2 =>{

            this.ngOnInit();
          });    
        }}
      );
    });
    
  }  
}

