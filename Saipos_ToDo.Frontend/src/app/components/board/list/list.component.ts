import {Component, ElementRef, Input, OnInit, Output, EventEmitter, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {ListInterface, List} from '../../model/list/list';
import {Card, CardInterface} from '../../model/card/card';
import { MovementIntf, Movement } from '../../model/card/movement';
import { PanelService } from '../../../panel.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  @Input() list: ListInterface;
  @Input() listIndex: number;
  @Output() moveCardAcrossList: EventEmitter<MovementIntf> = new EventEmitter<MovementIntf>();
  @Output() newCardAdded: EventEmitter<Card> = new EventEmitter<CardInterface>();
  @Output() deleteList: EventEmitter<number> = new EventEmitter<number>();

  private cardCount = 0;
  private tasks = [];
  private service: PanelService;

  constructor(private elementRef: ElementRef , @Inject(DOCUMENT) private document: Document, private panelService: PanelService) 
  {
    panelService.getPanel().subscribe((data : any) => { this.tasks = data.tasks; this.loadList(); });   
    this.service = panelService; 
  }

  ngOnInit() {
    
  }

  loadList(){    
    this.tasks.forEach(element => {
      if(this.listIndex === 0 && element.isTaskDone == '0'){
        this.addExistingCard(element.id, element.title, element.description, element.isTaskDone, element.owner.name, element.owner.email, element.changeCount);
      }      
      if(this.listIndex === 1 && element.isTaskDone == '1'){
        this.addExistingCard(element.id, element.title, element.description, element.isTaskDone, element.owner.name, element.owner.email, element.changeCount);
      }  
    });
  }

  addExistingCard(id, title, description, isTaskDone, owner, email, changeCount){
    this.cardCount++;
    const card = new Card(id, title, description, isTaskDone, owner, email, changeCount);
    this.list.cards.push(card);
    this.newCardAdded.emit(card);
  }

  addNewCard() {
    const card = new Card(this.cardCount++ + '', 'New Title', 'New Description', '', 'New Owner', 'email@email.com', '');

    if (this.listIndex == 0){
      card.isTaskDone = 'false'
    }
    else{
      card.isTaskDone = 'true'
    }

    this.panelService.postTask(
      {
        "id": 0,
        "title": card.title,
        "description": card.description,
        "isTaskDone": (card.isTaskDone =="true"),
        "owner": {
            "id": 0,
            "name": card.owner,
            "email": card.email
        },
        "ownerId": 0,
        "changeCount": 0
      }
    );

    this.list.cards.push(card);
    this.newCardAdded.emit(card);
  }


  allowCardReplacement(dragEvent: DragEvent) {
    dragEvent.dataTransfer.dropEffect = 'move';
    dragEvent.preventDefault();
  }

  delete(){
    this.deleteList.emit(this.listIndex);
  
  }

  dropCard(dragEvent: DragEvent) {
    const data = JSON.parse(dragEvent.dataTransfer.getData('text'));
    const elements: Element[] = this.document.elementsFromPoint(dragEvent.x, dragEvent.y);
    const cardElementBeingDroppedOn = elements.find( x => x.tagName.toLowerCase() === 'app-card-summary');
    const listElementBeingDroppedOn = elements.find( x => x.tagName.toLowerCase() === 'app-list');
    const listIndexDroppedOn = parseInt(listElementBeingDroppedOn.getAttribute('listIndex'), 10);
    const cardIndexDroppedOn  = cardElementBeingDroppedOn === undefined ? undefined :
          parseInt(cardElementBeingDroppedOn.getAttribute('cardIndex'), 10);
    const listIndexDragged = parseInt(data.listIndex, 10);
    const cardIndexDragged = parseInt(data.cardIndex, 10);

    if (listIndexDragged === listIndexDroppedOn) {
        // same list just re-organize the cards
        const cardDragged = this.list.cards.splice(cardIndexDragged,1);
        this.list.cards.splice(cardIndexDroppedOn , 0 , ...cardDragged);
    } else {
      this.moveCardAcrossList.emit(new Movement(listIndexDragged, listIndexDroppedOn , cardIndexDragged , cardIndexDroppedOn));
    }

  }
}

