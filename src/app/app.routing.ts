import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

//Componentes
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';

const appRoutes:Routes=[
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'blog', component:BlogComponent},
    {path:'formulario', component:FormularioComponent},
    {path:'pagina', component:PaginaComponent},
    {path:'pagina/:nombre', component:PaginaComponent},
    //Pagina no encontrada
    {path: '**',component: ErrorComponent}
]

//Exportar modulo de rutas, estabelcer servicio para usarlo
export const appRoutingProviders:any[]=[]

//Funcionamiento de las rutas
export const routing:ModuleWithProviders<any>=RouterModule.forRoot(appRoutes)
