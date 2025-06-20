import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmar_password');
  if (password?.value !== confirmPassword?.value) {
    return { passwordmismatch: true };
  }
  return null;
};
