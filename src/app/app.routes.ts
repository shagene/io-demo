// app.routes.ts

import { Routes } from '@angular/router';
import { AppsPage } from './pages/apps/apps.page';
import { FilesPage } from './pages/files/files.page';
import { HelpcenterPage } from './pages/helpcenter/helpcenter.page';
import { HoldersPage } from './pages/holders/holders.page';
import { HomePage } from './pages/home/home.page';
import { ReportsPage } from './pages/reports/reports.page';
import { SpacesPage } from './pages/spaces/spaces.page';

export const routes: Routes = [
    { path: 'apps', component: AppsPage },
    { path: 'files', component: FilesPage },
    { path: 'helpcenter', component: HelpcenterPage },
    { path: 'holders', component: HoldersPage },
    { path: 'home', component: HomePage },
    { path: 'reports', component: ReportsPage },
    { path: 'spaces', component: SpacesPage },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' },
];