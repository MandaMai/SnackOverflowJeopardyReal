import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question/question.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class Board implements OnInit {

  tosSign = false;
  sndUsage = false;

  // [ngClass]="klassStyler" 
  klassStyler = {
    selected: false,
    notSelected: true
  }

  //title = 'SnackOverflowJeopardy';

  maxJessicaPoints: number;
  chaosPoints: number;
  useChaosPoints: boolean;
  openModalDammit: boolean;
  closeResult: string;
  questionText: string;
  questionAnswer: string;
  realPoints: string;
  questionLabel: string;
  status: boolean;
  statuslabel: string;

  constructor(private modalService: NgbModal) { }

  open(content, index: number) {
    console.log(index);
    var buttonId = ('clr' + index).toString();
    console.log(buttonId);
    var question = new Question();
    question = this.getQuestionFromIndex(index);
    console.log(question);
    question.selected = true;
    this.questionText = question.question;
    this.questionAnswer = question.answer;
    this.realPoints = question.points.toString();
    question.selected = this.getQuestionSelected(question.selected);
    //console.log(question.selected);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = 'Closed with: ${result}';
    }, (reason) => {
      this.closeResult = 'Dismissed ${this.getDismissReason(reason)}';
    });
    document.getElementById(index.toString()).style.backgroundColor = 'blue'; 
    document.getElementById(index.toString()).style.color = 'blue';
    document.getElementById(index.toString()).style.textShadow = 'none';

    
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    this.maxJessicaPoints = 500;
    this.chaosPoints = 1000000;
    this.useChaosPoints = false;
    this.openModalDammit = true;
    var indexValue = 0;
    var indexText: string;
    this.status = false;
    
    //load questions
    for (let i = 0; i < 25; i++) {
      var question = new Question();
      indexValue = i + 1;
      indexText = indexValue.toString();      
      question = this.getQuestionFromIndex(indexValue);
      var getLabel = document.getElementById(indexText);
      getLabel.textContent = question.points.toString();
      console.log (question);
    }


  }

  getQuestionSelected(selected: boolean) {
    return !selected;
  }

  getQuestionFromIndex(index: number) {
    var temp = new Question;
    var chaos = this.chanceToUseChaos();
    var points = this.getJessicaPoints(chaos);
    temp.label = 'X';
    temp.selected = false;
    switch( index ) {
      case 1: {
        temp.index = index;
        temp.question = 'How many species of sharks are there?';
        temp.answer = '500';
        temp.points = points;
        temp.chaos = chaos;
        //question info
        break;
      }
      case 2: {
        temp.index = index;
        temp.question = 'Which shark is known for its funny teeth?';
        temp.answer = 'Goblin Shark';
        temp.points = points;
        temp.chaos = chaos;
        //question info
        break;
      }
      case 3: {
        temp.index = index;
        temp.question = 'What species of shark is known to be the oldest and the slowest?';
        temp.answer = 'Greenland Shark';
        temp.points = points;
        temp.chaos = chaos;
        //question info
        break;
      }
      case 4: {
        temp.index = index;
        temp.question = 'Sharks have existed for approximately how many years (in millions)?';
        temp.answer = '350';
        temp.points = points;
        temp.chaos = chaos;
        //question info
        break;
      }
      case 5: {
        temp.index = index;
        temp.question = 'How many species of sharks are known?';
        temp.answer = '440';
        temp.points = points;
        temp.chaos = chaos;
        //question info
        break;
      }
      case 6: {
        temp.index = index;
        temp.question = 'This dog breed can run up to 44 miles per hour';
        temp.answer = 'Greyhound';
        temp.points = points;
        temp.chaos = chaos;
        //question info
        break;
      }
      case 7: {
        temp.index = index;
        temp.question = 'This breed of dog does not bark';
        temp.answer = 'Basenjis';
        temp.points = points;
        temp.chaos = chaos;
        //question info
        break;
      }
      case 8: {
        temp.index = index;
        temp.question = 'The name of the first dog in space and traveled around the Earth in 1957';
        temp.answer = 'Laika - from Russia';
        temp.points = points;
        temp.chaos = chaos;
        //question info
        break;
      }
      case 9: {
        temp.index = index;
        temp.question = 'No two dogs have the same of these';
        temp.answer = 'Nose Print';
        temp.points = points;
        temp.chaos = chaos;
        //question info
        break;
      }
      case 10: {
        temp.index = index;
        temp.question = 'This breed of dog can grow to be over 200 pounds';
        temp.answer = 'Mastiffs';
        temp.points = points;
        temp.chaos = chaos;
        //question info
        break;
      }
      case 11: {
        temp.index = index;
        temp.question = 'What is the proper term for a group of kittens?';
        temp.answer = 'kindle, litter, or intrigue';
        temp.points = points;
        temp.chaos = chaos;
        //question info
        break;
      }
      case 12: {
        temp.index = index;
        temp.question = 'What is it called when a cat kneads the ground';
        temp.answer = 'Snurgling';
        temp.points = points;
        temp.chaos = chaos;
        //question info
        break;
      }
      case 13: {
        temp.index = index;
        temp.question = 'How many hours a day do cats usually sleep?';
        temp.answer = '12-16';
        temp.points = points;
        temp.chaos = chaos;
        //question info
        break;
      }
      case 14: {
        temp.index = index;
        temp.question = 'The number of sounds a cat can make';
        temp.answer = '100';
        temp.points = points;
        temp.chaos = chaos;
        //question info
        break;
      }
      case 15: {
        temp.index = index;
        temp.question = 'All cats are born with what color eyes?';
        temp.answer = 'Blue';
        temp.points = points;
        temp.chaos = chaos;
        //question info
        break;
      }
      case 16: {
        temp.index = index;
        temp.question = 'This animal is known as delivery people from the spirit world';
        temp.answer = 'Owls';
        temp.points = points;
        temp.chaos = chaos;
        //question info
        break;
      }
      case 17: {
        temp.index = index;
        temp.question = 'If you see five of these animals, sickness will follow';
        temp.answer = 'Crows';
        temp.points = points;
        temp.chaos = chaos;
        //question info
        break;
      }
      case 18: {
        temp.index = index;
        temp.question = 'This superstition originated during the Medieval time when pagans believed diving beings lived in trees ';
        temp.answer = 'Knocking on Wood';
        temp.points = points;
        temp.chaos = chaos;
        //question info
        break;
      }
      case 19: {
        temp.index = index;
        temp.question = 'You are not allowed to do this in Lithuania as it will cause little devils to appear';
        temp.answer = 'Whistling Inside';
        temp.points = points;
        temp.chaos = chaos;
        //question info
        break;
      }
      case 20: {
        temp.index = index;
        temp.question = 'These were banned in Syria because it was feared it would cause a drought';
        temp.answer = 'Yoyos';
        temp.points = points;
        temp.chaos = chaos;
        //question info
        break;
      }
      case 21: {
        temp.index = index;
        temp.question = 'This is the slang word for the British Pound';
        temp.answer = 'Quid';
        temp.points = points;
        temp.chaos = chaos;
        //question info
        break;
      }
      case 22: {
        temp.index = index;
        temp.question = 'A person who advises or shows the way to others';
        temp.answer = 'Guide';
        temp.points = points;
        temp.chaos = chaos;
        //question info
        break;
      }
      case 23: {
        temp.index = index;
        temp.question = 'The quality or state of being calm';
        temp.answer = 'Tranquility';
        temp.points = points;
        temp.chaos = chaos;
        //question info
        break;
      }
      case 24: {
        temp.index = index;
        temp.question = 'Another word for brown bear, especially in English folk tales';
        temp.answer = 'Bruin';
        temp.points = points;
        temp.chaos = chaos;
        //question info
        break;
      }
      case 25: {
        temp.index = index;
        temp.question = 'This is one of the longest word containing UI (23 letters)?';
        temp.answer = 'Indistinguishablenessess';
        temp.points = points;
        temp.chaos = chaos;
        //question info
        break;
      }
      default: {
        //when all else fails
        break;
      }
    }
    return temp;
  }

  getJessicaPoints(chaos: boolean) {
    if(chaos) {
      return (Math.floor(Math.random() * this.chaosPoints));
    } else {
      return (Math.floor(Math.random() * this.maxJessicaPoints));
    }
    
  }

  chanceToUseChaos() {
    this.useChaosPoints = false;
    const temp = Math.floor(Math.random() * this.maxJessicaPoints);
    console.log(temp);
    if (temp % 4 === 0) {
      this.useChaosPoints = true;
    }
    console.log(this.useChaosPoints);
    return this.useChaosPoints;
  }


  }



