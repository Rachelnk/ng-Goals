import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals:Goal[] = [
    new Goal(1, 'Cook', 'Find chicken mushroom recipe', new Date(2020,3,14)),
    new Goal(2,'Shopping', 'I need to go grocery shopping', new Date(2019,6,9)),
    new Goal(3, 'Study', 'I need to cover todays content', new Date(2021,7,8)),
    new Goal(4, 'Do laundry', 'I need to clean the sheets and duvet', new Date(2022,5,1)) , 
    new Goal(5, 'Clean house', 'I need to clean the windows, doors, floor, counters and skirting', new Date(2022,4,10)),
    new Goal(6, 'Get cat food', 'Get omena for mr. cat', new Date(2022,4,11))
  ];
  addNewGoal(goal:any){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal);

  }
  
  toggleDetails(index: any){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  deleteGoal(isComplete:any, index:number) {
    if(isComplete) {
      
      let toDelete = confirm(`Are you sure you want to delete goal ${this.goals[index].name}`)
      
      if(toDelete){
        this.goals.splice(index,1);

      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
