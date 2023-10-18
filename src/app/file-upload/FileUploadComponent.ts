import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
// implements OnInit
export class FileUploadComponent implements OnInit {
  selectedFile: File | null = null;
  fileList: fileInfo[] = [];
  constructor(private http: HttpClient) {}

  uploadSuccessMessage: string | null = null;

  ngOnInit() {
    this.getFiles();
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  async uploadFile() {
    // console.log(this.selectedFile);
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.http.post('http://localhost:3000/upload', formData).subscribe(
        (response: any) => {
          console.log('Archivo subido con éxito:', response.filename);
          this.getFiles();
        },
        (error) => {
          console.error('Error al subir el archivo:', error);
        }
      );
      this.uploadSuccessMessage = '¡Archivo subido con éxito!';
      this.selectedFile = null;

      // Limpiar el archivo seleccionado después de agregarlo a la lista
    } else {
      this.uploadSuccessMessage =
        'Error al subir el archivo. Por favor, inténtelo de nuevo.';
      console.log('No se ha seleccionado ningún archivo.');
    }
  }

  getFiles() {
    this.http.get('http://localhost:3000/files').subscribe(
      (response: any) => {
        this.fileList = [];
        response.forEach((file: fileInfo) => {
          this.fileList.push({ id: file.id, name: file.name, path: file.path });
        }),
          console.log('Archivos descargados con éxito:', response);
      },
      (error) => {
        console.error('Error al descargar los archivos:', error);
      }
    );
  }

  removeFile(id: string) {
    this.http
      .delete('http://localhost:3000/files/' + id)
      .subscribe((response: any) => {
        console.log('Archivo eliminado con éxito:', response);
        this.getFiles();
      });
  }
  clearUploadSuccessMessage() {
    this.uploadSuccessMessage = null;
  }
}
interface fileInfo {
  id: string;
  name: string;
  path: string;
}
