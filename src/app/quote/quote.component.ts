import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Education is the key to successs', 'Nelson mandela', 'Brendah', new Date(2020,8,3), 0, 0),
    new Quote(2, 'Giving up is a birth of regrets', 'Deshauna Barber ', 'zilfa', new Date(2019, 12, 9), 0, 0),
    new Quote(3, 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish, but have eternal life."', 'Diana ', 'sisse', new Date(2018, 9, 12), 0, 0)
  ]
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewGoal(goal){
    let goalLength = this.quotes.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.quotes.push(goal)
  }
    constructor() { }

  ngOnInit(): void {
  }

}
