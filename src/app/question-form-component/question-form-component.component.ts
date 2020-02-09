import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {QuizService} from '../../services/quiz.service';
import {Quiz} from '../../models/quiz.model';
import {Answer, Question} from '../../models/question.model';

@Component({
  selector: 'app-question-form-component',
  templateUrl: './question-form-component.component.html',
  styleUrls: ['./question-form-component.component.scss']
})
export class QuestionFormComponentComponent implements OnInit {
  @Input() id: string;
  quizCourant: Quiz;
  questionForm: FormGroup;
  quiz: any[];
  constructor(private formbuild: FormBuilder, private quizservice: QuizService) {
    this.InitialiseQuestionForm();

  }

  ngOnInit() {
    this.quizCourant = this.quizservice.getQuizAtIndex(+this.id) as Quiz;
    console.log(this.id);
    console.log(this.quizCourant.questions);
  }
  InitialiseQuestionForm() {
    this.questionForm = this.formbuild.group({
      label: [''],
      answers: this.formbuild.array([])
  });
  }

  getAnswers() {
    return this.questionForm.get('answers') as FormArray;
  }
  createAnswer() {
    return this.formbuild.group(
      {
        value: '',
        isCorrect: false
      }
    );
  }
  addAnswer() {
this.getAnswers().push(this.createAnswer());
  }

  addQuestion() {
    const question: Question = this.questionForm.getRawValue() as Question;
    this.quizservice.addQuestion(question, this.quizCourant);
  }
}
