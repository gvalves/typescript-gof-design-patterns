export abstract class ValidationComponent {
  abstract validate(value: unknown): boolean;
}

export class ValidationEmail extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /@/.test(value);
  }
}

export class ValidationString extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'string';
  }
}

export class ValidationNumber extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /\d+/.test(value);
  }
}

export class ValidationComposite extends ValidationComponent {
  private readonly _children: ValidationComponent[] = [];

  validate(value: unknown): boolean {
    return this._children.every((validation) => validation.validate(value));
  }

  add(...validations: ValidationComponent[]): void {
    validations.forEach((validation) => this._children.push(validation));
  }

  remove(validation: ValidationComponent): void {
    const validationIndex = this._children.indexOf(validation);
    if (validationIndex !== -1) this._children.splice(validationIndex, 1);
  }
}

const validateEmail = new ValidationEmail();
const validateNumber = new ValidationNumber();
const validateString = new ValidationString();

const validationComposite = new ValidationComposite();
validationComposite.add(validateEmail, validateNumber, validateString);

console.log(validationComposite.validate('luiz123@gmail.com'));
