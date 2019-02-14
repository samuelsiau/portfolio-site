import { Title, Meta } from '@angular/platform-browser';
import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public constructor(
    private titleService: Title,
    private metaService: Meta
  ) {
    
  }

  ngOnInit() {
    this.metaService.addTag({ name: 'description', content: 'UX/UI Designer and Frontend developer.' });
    this.metaService.addTag({ name: 'author', content: 'Samuel Siau' });
    this.metaService.addTag({ name: 'keywords', content: 'Portfolio website, UI Designer, UX Designer' });
    this.titleService.setTitle('Samuel Siau - Digital Designer');
  }
}
