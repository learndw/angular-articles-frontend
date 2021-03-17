import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

//Componentes
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { NewArticleComponent } from "./components/new-article/new-article.component";
import { EditArticleComponent } from './components/edit-article/edit-article.component';

const appRoutes:Routes=[
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'blog', component:BlogComponent},
    {path:'formulario', component:FormularioComponent},
    {path:'new-article', component:NewArticleComponent},
    {path:'edit-article/:id', component:EditArticleComponent},
    {path:'blog/article/:id', component:ArticleComponent},
    {path:'search/:keyword', component:SearchComponent},
    {path:'pagina', component:PaginaComponent},
    {path:'pagina/:nombre', component:PaginaComponent},
    //Pagina no encontrada
    {path: '**',component: ErrorComponent}
]

//Exportar modulo de rutas, estabelcer servicio para usarlo
export const appRoutingProviders:any[]=[]

//Funcionamiento de las rutas
export const routing:ModuleWithProviders<any>=RouterModule.forRoot(appRoutes)
