import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class Question implements OnInit {
  index: number;
  question: string;
  answer: string;
  points: number;
  chaos: boolean;
  selected: boolean;
  label: string;

  constructor() { 
  }

  ngOnInit(): void {
  }

  createQuestion(index: number, question: string, answer: string, points: number, chaos: boolean, selected: boolean, label: string) {
    var newQuestion = new Question();
    newQuestion.index = index;
    newQuestion.question = question;
    newQuestion.answer = answer;
    newQuestion.points = points;
    newQuestion.chaos = chaos;
    newQuestion.label = '?';
    newQuestion.selected = true;
    return newQuestion;
  }
}
