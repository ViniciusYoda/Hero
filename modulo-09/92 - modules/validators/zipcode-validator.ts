import { Validator } from "./validator";

class ZipCodeValidator implements Validator {
  isValid(S: string): boolean {
    const zipCodeRegex = /^[0-9]{5}(?:-[0-9]{3})?$/;

    return zipCodeRegex.test(S);
  }
}

export { ZipCodeValidator };