import { Component, signal } from '@angular/core';
import { ButtomPrimaryComponent } from '../buttom-primary/buttom-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsletterService } from '../../services/newsletter.service';

@Component({
  selector: 'newsletter-form',
  standalone: true,
  imports: [
    ButtomPrimaryComponent,
    ReactiveFormsModule
  ],
  providers: [NewsletterService],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss'
})
export class NewsletterFormComponent {
  newsletterForm!: FormGroup;
  loading = signal(false);

  constructor(private service: NewsletterService) {
    this.newsletterForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit(){
    if(this.newsletterForm.valid){
      this.loading.set(true);
      const values = this.newsletterForm.value;
      this.service.sendData(values.name, values.email).subscribe({
        next: () => {
          this.newsletterForm.reset();
        },
        complete: () => {
          this.loading.set(false);
        }
      });
    }
  }
}

