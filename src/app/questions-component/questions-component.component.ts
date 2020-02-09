import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from '../../models/question.model';
import {Quiz} from '../../models/quiz.model';
import {QuizService} from '../../services/quiz.service';

@Component({
  selector: 'app-questions-component',
  templateUrl: './questions-component.component.html',
  styleUrls: ['./questions-component.component.scss']
})
export class QuestionsComponentComponent implements OnInit {

  @Input()  id: string;
  quiz: Quiz;
  @Input() question: Question;
  @Output() QuestionDeleted: EventEmitter<Question> = new EventEmitter<Question>();
  constructor(private quizService: QuizService) {

  }

  ngOnInit() {
    this.quiz = this.quizService.getQuizAtIndex(+this.id) as Quiz;
    console.log(this.question);
  }

  deleteQuestion() {
  this.QuestionDeleted.emit(this.question);
  }

}
