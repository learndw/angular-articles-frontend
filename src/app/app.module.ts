import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Cargar modulos y servicios de las rutas
import { routing, appRoutingProviders } from './app.routing';

//Subir archivos
import { AngularFileUploaderModule } from "angular-file-uploader";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
//Formularios
import { FormsModule } from '@angular/forms';
//Permite realizar peticiones ajax
import { HttpClientModule } from '@angular/common/http';
import { ArticlesComponent } from './components/articles/articles.component';
//Modulo de Moment
import { MomentModule } from 'angular2-moment';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { NewArticleComponent } from './components/new-article/new-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    PaginaComponent,
    ErrorComponent,
    ArticlesComponent,
    ArticleComponent,
    SearchComponent,
    NewArticleComponent,
    EditArticleComponent
  ],
  imports: [
    BrowserModule, 
    routing,
    FormsModule,
    HttpClientModule,
    MomentModule,
    AngularFileUploaderModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
