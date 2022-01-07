interface Observable {
  subscribe(...observers: Observer[]): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

interface Observer {
  update(...args: unknown[]): void;
}

class InputObservable implements Observable {
  private observers: Observer[] = [];

  constructor(public element: HTMLInputElement) {}

  subscribe(...observers: Observer[]): void {
    observers.forEach((observe) => {
      if (!this.observers.includes(observe)) this.observers.push(observe);
    });
  }

  unsubscribe(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);

    if (observerIndex === -1) return;

    this.observers.splice(observerIndex, 1);
  }

  notify(): void {
    this.observers.forEach((observe) => observe.update(this));
  }
}

class ParagraphObserver implements Observer {
  constructor(public element: HTMLParagraphElement) {}

  update(observable: InputObservable): void {
    this.element.innerText = observable.element.value;
  }
}

class DivObserver implements Observer {
  constructor(public element: HTMLDivElement) {}

  update(observable: InputObservable): void {
    this.element.innerText = observable.element.value;
  }
}

const makeInput = (): HTMLInputElement => {
  const input = document.createElement('input');
  document.body.appendChild(input);
  return input;
};

const makeParagraph = (): HTMLParagraphElement => {
  const paragraph = document.createElement('p');
  paragraph.innerText = 'Texto inicial (HARDCODE)';
  document.body.appendChild(paragraph);
  return paragraph;
};

const makeDiv = (): HTMLDivElement => {
  const div = document.createElement('div');
  div.innerText = 'Texto inicial da div (HARDCODE)';
  document.body.appendChild(div);
  return div;
};

const input = new InputObservable(makeInput());
const paragraph1 = new ParagraphObserver(makeParagraph());
const paragraph2 = new ParagraphObserver(makeParagraph());
const div1 = new DivObserver(makeDiv());

input.subscribe(paragraph1, paragraph2, div1);

input.element.addEventListener('keyup', () => {
  input.notify();
});

input.unsubscribe(paragraph2);
