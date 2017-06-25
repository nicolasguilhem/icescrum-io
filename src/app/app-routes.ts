import { Routes } from '@angular/router';

import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PageServicesComponent } from './page-services/page-services.component';
import { PageConfigComponent } from './page-config/page-config.component';

export const AppRoutes: Routes = [
    { path: '', component: PageAccueilComponent },
    { path: 'services', component: PageServicesComponent },
    { path: 'config', component: PageConfigComponent }
];