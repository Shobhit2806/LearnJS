
// https://www.youtube.com/watch?v=4Vpw7uORgrE&t=550s


class Subscriber {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  notify(msg) {
    console.log(`Hey ${this.name}:${msg}`);
  }
}

class Publisher {
  subscriptionArr = [];

  subscribe(subscriber) {
    this.subscriptionArr.push(subscriber);
  }

  unsubscribe(subscriber) {
    this.subscriptionArr = this.subscriptionArr.filter(
      (sub) => sub.id !== subscriber.id
    );
  }

  publish(msg) {
    for (let subscriber of this.subscriptionArr) {
      subscriber.notify(msg);
    }
  }
}

const sub1 = new Subscriber(1, "Shobhit");
const sub2 = new Subscriber(2, "Rohit");
const sub3 = new Subscriber(3, "Shaan");

const channel = new Publisher();

channel.subscribe(sub1);
channel.subscribe(sub2);
channel.subscribe(sub3);

channel.publish("Hey Guys");

channel.unsubscribe(sub1);

channel.publish("Hi People");

