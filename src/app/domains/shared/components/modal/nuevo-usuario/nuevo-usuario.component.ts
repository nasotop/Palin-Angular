import { Component, inject, signal } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormErrorComponent } from '../../form/form-error/form-error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { birthdayValidator } from './validactions/birthdate.validation';
import { securePasswordValidator } from './validactions/secure-password.validation';
import { passwordMatchValidator } from './validactions/password-match.validation';
@Component({
  selector: 'app-nuevo-usuario',
  imports: [CommonModule, ReactiveFormsModule, FormErrorComponent],

  templateUrl: './nuevo-usuario.component.html',
  styleUrl: './nuevo-usuario.component.css',
})
export class NuevoUsuarioComponent {
  constructor(public activeModal: NgbActiveModal) {}
  formBuilder = inject(FormBuilder);

  formControl = this.formBuilder.group(
    {
      primer_nombre: ['', Validators.required],
      segundo_nombre: ['', Validators.required],
      primer_apellido: ['', Validators.required],
      segundo_apellido: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required, birthdayValidator],
      email: ['', [Validators.required, Validators.email]],
      nombre_usuario: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(18),
          securePasswordValidator,
        ],
      ],
      confirmar_password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(18),
        ],
      ],
      direccion_envio: ['', Validators.required],
    },
    { validators: [passwordMatchValidator] }
  );
}
