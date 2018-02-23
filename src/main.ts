import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerAsCustomElements } from '@angular/elements'

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { HelloWorldComponent } from './app/hello-world/hello-world.component';

if (environment.production) {
  enableProdMode();
}
registerAsCustomElements([HelloWorldComponent], () => {
  return platformBrowserDynamic().bootstrapModule(AppModule);
});
