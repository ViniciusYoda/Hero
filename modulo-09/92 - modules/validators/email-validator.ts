import { Validator } from "./validator";

export default class EmailValidator implements Validator {
  isValid(s: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(s);
  }
}