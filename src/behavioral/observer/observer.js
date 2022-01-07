var InputObservable = /** @class */ (function () {
    function InputObservable(element) {
        this.element = element;
        this.observers = [];
    }
    InputObservable.prototype.subscribe = function () {
        var _this = this;
        var observers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observers[_i] = arguments[_i];
        }
        observers.forEach(function (observe) {
            if (!_this.observers.includes(observe))
                _this.observers.push(observe);
        });
    };
    InputObservable.prototype.unsubscribe = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1)
            return;
        this.observers.splice(observerIndex, 1);
    };
    InputObservable.prototype.notify = function () {
        var _this = this;
        this.observers.forEach(function (observe) { return observe.update(_this); });
    };
    return InputObservable;
}());
var ParagraphObserver = /** @class */ (function () {
    function ParagraphObserver(element) {
        this.element = element;
    }
    ParagraphObserver.prototype.update = function (observable) {
        this.element.innerText = observable.element.value;
    };
    return ParagraphObserver;
}());
var DivObserver = /** @class */ (function () {
    function DivObserver(element) {
        this.element = element;
    }
    DivObserver.prototype.update = function (observable) {
        this.element.innerText = observable.element.value;
    };
    return DivObserver;
}());
var makeInput = function () {
    var input = document.createElement('input');
    document.body.appendChild(input);
    return input;
};
var makeParagraph = function () {
    var paragraph = document.createElement('p');
    paragraph.innerText = 'Texto inicial (HARDCODE)';
    document.body.appendChild(paragraph);
    return paragraph;
};
var makeDiv = function () {
    var div = document.createElement('div');
    div.innerText = 'Texto inicial da div (HARDCODE)';
    document.body.appendChild(div);
    return div;
};
var input = new InputObservable(makeInput());
var paragraph1 = new ParagraphObserver(makeParagraph());
var paragraph2 = new ParagraphObserver(makeParagraph());
var div1 = new DivObserver(makeDiv());
input.subscribe(paragraph1, paragraph2, div1);
input.element.addEventListener('keyup', function () {
    input.notify();
});
input.unsubscribe(paragraph2);
