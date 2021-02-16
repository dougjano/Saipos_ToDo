import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../model/card/card';
import { ContentEditDirective } from 'src/app/directives/common/content-edit.directive';
import { PanelService } from '../../../panel.service';

@Component({
  selector: 'app-card-summary',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card;
  @Input() listIndex: number;
  @Input() cardIndex: number;

  private service: PanelService;
  private hasLogged: string = 'false';

  constructor(private panelService: PanelService) { this.service = panelService; }

  ngOnInit() {
    
  }

  chechChangePermission(dragEvent: DragEvent){
  }

  identifyCardBeingDragged(dragEvent: DragEvent) {
    dragEvent.dataTransfer.effectAllowed = 'move'
    dragEvent.dataTransfer.dropEffect= 'move'
    const transferObject = {
      'listIndex' : this.listIndex,
      'cardIndex' : this.cardIndex
    };
    dragEvent.dataTransfer.setData( 'text', JSON.stringify(transferObject));
  }

  allowCardDragToBeDropped(dragEvent: DragEvent) {
      dragEvent.dataTransfer.dropEffect= 'move'
      dragEvent.preventDefault();
  }

  identifyTitleBeingEdited(editEvent: ContentEditDirective) {
    this.service.postTask(
      {
        "id": this.card.id,
        "title": editEvent,
        "description": this.card.description,
        "isTaskDone": (this.card.isTaskDone =="true"),
        "owner": {
            "id": 0,
            "name": this.card.owner,
            "email": this.card.email
        },
        "ownerId": 0,
        "changeCount": this.card.changeCount
      } 
    );
  }

  identifyDescriptionBeingEdited(editEvent: ContentEditDirective) {
    this.service.postTask(
      {
        "id": this.card.id,
        "title": this.card.title,
        "description": editEvent,
        "isTaskDone": (this.card.isTaskDone =="true"),
        "owner": {
            "id": 0,
            "name": this.card.owner,
            "email": this.card.email
        },
        "ownerId": 0,
        "changeCount": this.card.changeCount
      } 
    );
  }

  identifyOwnerBeingEdited(editEvent: ContentEditDirective) {
    this.service.postTask(
      {
        "id": this.card.id,
        "title": this.card.title,
        "description": this.card.description,
        "isTaskDone": (this.card.isTaskDone =="true"),
        "owner": {
            "id": 0,
            "name": editEvent,
            "email": this.card.email
        },
        "ownerId": 0,
        "changeCount": this.card.changeCount
      } 
    );
  }

  identifyEmailBeingEdited(editEvent: ContentEditDirective) {
    this.service.postTask(
      {
        "id": this.card.id,
        "title": this.card.title,
        "description": this.card.description,
        "isTaskDone": (this.card.isTaskDone =="true"),
        "owner": {
            "id": 0,
            "name": this.card.owner,
            "email": editEvent
        },
        "ownerId": 0,
        "changeCount": this.card.changeCount
      } 
    );
  }
}

