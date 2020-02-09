import {Component, Input, OnInit} from '@angular/core';
import {Quiz} from '../../models/quiz.model';
import {QuizService} from '../../services/quiz.service';
import {Question} from '../../models/question.model';

@Component({
  selector: 'app-question-list-component',
  templateUrl: './question-list-component.component.html',
  styleUrls: ['./question-list-component.component.scss']
})
export class QuestionListComponentComponent implements OnInit {

  @Input() id: string;
  quizCourant: Quiz;

  constructor(private quizservice: QuizService) { }

  ngOnInit() {
    this.quizCourant = this.quizservice.getQuizAtIndex(+this.id) as Quiz;
  }
  deleteQuestion(question: Question) {
this.quizservice.deleteQuestion(this.quizCourant, question);
  }

}
