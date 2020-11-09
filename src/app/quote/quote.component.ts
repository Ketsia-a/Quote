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
    new Quote(3, ' my life is good', 'Diana ', 'sisse', new Date(2018, 9, 12), 0, 0)
  ]

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this quote?`)
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let goalLength = this.quotes.length;
    quote.id = goalLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
    constructor() { }

  ngOnInit(): void {
  }

}
