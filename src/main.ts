import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),

    // ✅ Correct provider for ngx-echarts 20.x
    provideEchartsCore({ echarts })
  ]
}).catch((err) => console.error(err));
