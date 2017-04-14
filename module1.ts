import { Observable } from 'rxjs';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/filter';

let numbers = [1,5,10,100];
let source = Observable.create(observer => {
    let index = 0;
    let produceValue = () => {
        observer.next(numbers[index]);
        if(index < numbers.length) {
            index++;
            setTimeout(produceValue,250)
        }else {
            observer.complete();
        }
    }
    produceValue();
    
})
.map(n => n * 2)
.filter(n => n > 100)

source.subscribe({
    next: value => console.log(value),
    error: e => console.log(e),
    complete: () => console.log("complete!!!!")
})

// class MyObserver {
//     next(value) {
//         console.log(value)
//     }

//     error(e) {
//         console.log("error ${e}")
//     }
//     complete() {
//         console.log("complete!!")
//     }
// }
// source.subscribe(new MyObserver());