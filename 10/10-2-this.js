console.log(this);

// var은 window에 등록이된다.

class Counter {
  count = 0;
  increase = () => {
    console.log(this);
  }
}

const counter = new Counter();
counter.increase();

const caller = counter.increase;
// const caller = counter.increase.bind(counter);
caller();