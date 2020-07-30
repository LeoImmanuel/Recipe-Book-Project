import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/recipes', 
    pathMatch: 'full' 
  }, 
  { 
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)  
  },
  { 
    path: 'recipes', 
    loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)  
  },
  { 
    path: 'shopping-list', 
    loadChildren: () => import('./shopping-list/shopping.module').then(m => m.ShoppingModule)  
  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

