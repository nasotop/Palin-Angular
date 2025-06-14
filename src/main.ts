import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


appConfig.providers.push(NgbModalModule);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
