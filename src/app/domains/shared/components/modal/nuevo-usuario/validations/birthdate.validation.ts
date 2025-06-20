import { AbstractControl, ValidationErrors } from '@angular/forms';

export async function birthdayValidator(
  control: AbstractControl
): Promise<ValidationErrors | null> {
  debugger;
  const value = control.value;
  const birthDate = new Date(value);

  if (isNaN(birthDate.getTime()) || birthDate > new Date()) {
    return { invalidDate: true };
  }

  const today = new Date();
  const cutoff = new Date(value);
  cutoff.setFullYear(birthDate.getFullYear() + 13);

  if (today < cutoff) {
    return { underAge: true };
  }

  return null;
}
