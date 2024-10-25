import { Component } from '@angular/core';
import { catchError, Observable, Observer } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-httptalks',
  templateUrl: './httptalks.component.html',
  styleUrls: ['./httptalks.component.css']
})
export class HttptalksComponent {
  observable:any
  observer:any
  // constructor(private todoService:TodoService){
//   this.observable = new Observable((observer: Observer<number>) => {
//     let i = 0;
//     setInterval(() => {
//         observer.next(i++);
//         if (i === 5) {
//             observer.complete();
//         }
//     }, 1000);
    
// });
// this.observer = {
//   next: (value: number) => console.log('Received: ' + value),
//   error: (error:string) => console.error('Error: ' + error),
//   complete: () => console.log('Completed')
// };
// this.observable.subscribe(this.observer)
}
// todos: Todo[] = [];

  
  // ngOnInit() {
  //   this.todoService.getTodos().subscribe(todos => {
  //     this.todos = todos;
     
//     },error=>{
//       throw new Error(error.message);
//     //  console.log('Error handler',error.message);
//      });
//     console.log(this.todos);
//     const todoCred={
//       usName:'demo',
//       pwd:'updateddemo'
//     }
//     this.todoService.saveTodo(todoCred).subscribe(res=>{
//       console.log(res);
//     });
//     this.todoService.updateData(todoCred,50).subscribe(res=>{
//       console.log(res);
//     });
//     this.todoService.deleteData(45).subscribe(res=>{
//       console.log(res);
//     })
//   }




