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

  ngOnInit() {
    this.getFiles(); // Llama a getFiles() cuando el componente se inicia
  }

  fileList: fileInfo[] = [];
  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.fileList.push(this.selectedFile);
      this.http.post('http://localhost:3000/upload', formData).subscribe(
        (response: any) => {
          console.log('Archivo subido con éxito:', response.filename);
        },
        (error) => {
          console.error('Error al subir el archivo:', error);
        }
      );
      this.selectedFile = null; // Limpiar el archivo seleccionado después de agregarlo a la lista
    } else {
      console.log('No se ha seleccionado ningún archivo.');
    }
  }

  getFiles() {
    this.http.get('http://localhost:3000/upload/').subscribe(
      (response: any) => {
        response.forEach((file: any) => {
          this.fileList.push({ name: file });
        }),
          console.log('Archivos descargados con éxito:', response);
      },
      (error) => {
        console.error('Error al descargar los archivos:', error);
      }
    );
  }

  removeFile(index: number) {
    this.fileList.splice(index, 1);
  }
}
interface fileInfo {
  name: string;
}
