// // file-upload.component.ts
// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// interface UploadedFile {
//   name: string;
//   type: string;
//   uploaded: boolean;
// }

// @Component({
//   selector: 'app-file-upload',
//   templateUrl: './file-upload.component.html',
//   styleUrls: ['./file-upload.component.css'],
// })
// export class FileUploadComponent {
//   selectedFile: File | null = null;
//   fileList: UploadedFile[] = [];

//   constructor(private http: HttpClient) {}

//   onFileSelected(event: any) {
//     this.selectedFile = event.target.files[0];
//   }

//   uploadFile() {
//     if (this.selectedFile) {
//       const formData = new FormData();
//       formData.append('file', this.selectedFile);

//       this.http.post('http://localhost:3000/file-upload', formData).subscribe(
//         (response: any) => {
//           console.log('Archivo subido con éxito:', response.filename);

//           // Agregar el archivo subido a la lista
//           this.fileList.push({
//             name: this.selectedFile!.name,
//             type: this.selectedFile!.type,
//             uploaded: true,
//           });

//           // Limpiar el input de archivo
//           this.selectedFile = null;
//         },
//         (error) => {
//           console.error('Error al subir el archivo:', error);
//         }
//       );
//     } else {
//       console.log('No se ha seleccionado ningún archivo.');
//     }
//   }

//   removeFile(index: number) {
//     this.fileList.splice(index, 1);
//   }
// }
