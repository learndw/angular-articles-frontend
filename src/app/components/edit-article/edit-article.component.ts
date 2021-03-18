import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Router, ActivatedRoute } from '@angular/router';
import { Global } from '../../services/global';

//Alertas
import swal from 'sweetalert';

@Component({
  selector: 'app-edit-article',
  templateUrl: '../new-article/new-article.component.html',
  styleUrls: ['./edit-article.component.css'],
  providers:[ArticleService]
})
export class EditArticleComponent implements OnInit {
  public article: Article
  public status: string
  public page_title: string
  public is_edit:boolean
  public url_img:string

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    maxSize: "50",
    uploadAPI: {
      url: Global.url_upload_img,
      method: "POST",
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Seleccionar imagen ...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };

  constructor(
    private _articleService: ArticleService,
    private _router: Router,
    private _route:ActivatedRoute
  ) {
    this.article = new Article('', '', '', null, null)
    this.page_title='Editar Articulo'
    this.is_edit=true
    this.url_img=Global.url_img
   }

  ngOnInit(): void {

    //Obtener los datos del articulo
    this._route.params.subscribe(params => {
      let id = params['id']

      this._articleService.getArticle(id).subscribe(
        response => {


          if (response['article']) {
            this.article = response['article']
          }else{
            this._router.navigate(['/home'])
          }
        },
        error => {
          this._router.navigate(['/home'])
          console.log(error);

        }
      )

    })
  }

  imgUpload(data) {

    let img_data = data['body'].image

    this.article.image = img_data


  }

  onSubmit(){
    this._articleService.updateArticle(this.article._id,this.article).subscribe(
      response=>{
        if(response['article']){
          this.article=response['article']
          swal("Articulo modificado exitosamente!", "Haz click en ok Para continuar", "success");

          this._router.navigate(['/blog/article/'+this.article._id])
        }
        
        
      },
      error=>{
        console.log(error);
        
      }
    )
  }

}
