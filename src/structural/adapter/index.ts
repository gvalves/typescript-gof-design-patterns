import { EmailValidatorAdapter } from './validation/email-validator-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-validator-protocol';

const validateEmail = (
  emailValidator: EmailValidatorProtocol,
  email: string,
): void => {
  if (emailValidator.isEmail(email)) {
    console.log('Email é válido (CLASS)');
  } else {
    console.log('Email é inválido (CLASS)');
  }
};

const validateEmailFn = (
  emailValidator: EmailValidatorFnProtocol,
  email: string,
): void => {
  if (emailValidator(email)) {
    console.log('Email é válido (FUNCTION)');
  } else {
    console.log('Email é inválido (FUNCTION)');
  }
};

validateEmail(new EmailValidatorAdapter(), 'gustavo@gmail.com');
validateEmailFn(emailValidatorFnAdapter, 'gustavo#gmail.com');
