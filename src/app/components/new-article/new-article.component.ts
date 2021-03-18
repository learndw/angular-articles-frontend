import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Router } from '@angular/router';
import { Global } from '../../services/global';

//Alertas
import swal from 'sweetalert';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css'],
  providers: [ArticleService]
})
export class NewArticleComponent implements OnInit {

  public article: Article
  public status: string
  public page_title: string
  public is_edit: boolean

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
    private _router: Router
  ) {
    this.article = new Article('', '', '', null, null)
    this.page_title = 'Nuevo Articulo'
    this.is_edit = false
  }

  ngOnInit(): void {
  }


  imgUpload(data) {

    let img_data = data['body'].image

    this.article.image = img_data


  }

  onSubmit() {
    this._articleService.saveArticle(this.article).subscribe(
      response => {
        if (response['status'] == 'success') {
          this.status = response['status']
          this.article = response['article']

          swal("Articulo creado exitosamente!", "Haz click en ok Para continuar", "success");

          this._router.navigate(['/blog'])

        }

      },
      error => {
        this.status = 'error'
        console.log(this.status);


      }
    )

  }

}
