import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Amplify } from "aws-amplify";
import { AppModule } from "./app/app.module";
import awsconfig from "./aws-exports";
import { environment } from "./environments/environment";

/**
 * @note Configures aws-amplify
 */
Amplify.configure(awsconfig);

if (environment.production) {
  enableProdMode();
}

function bootstrap() {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    // eslint-disable-next-line no-console
    .catch((err) => console.error(err));
}


if (document.readyState === "complete") {
  bootstrap();
} else {
  document.addEventListener("DOMContentLoaded", bootstrap);
}
