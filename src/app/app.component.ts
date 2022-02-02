import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo-project';

  constructor(private translate:TranslateService){
    translate.setDefaultLang('en');

    translate.use('en');
  }

  changeLocale(locale:string){
    this.translate.use(locale);
  }
}
