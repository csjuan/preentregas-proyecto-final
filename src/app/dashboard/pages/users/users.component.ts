import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersCrearUsuarioComponent } from './components/users-crear-usuario/users-crear-usuario.component';
import { alumnos } from './components/modelos/index';


const ELEMENT_DATA: alumnos[] = [ {
    id: 1,
    name: 'jose',
    apellido: 'gauna',
    direccion: 'colon 237',
    email:'gauna@gmail.com',
    password: '451f51dvb',  
},
{
    id: 2,
    name: 'marcos',
    apellido: 'peña',
    direccion: 'charcas 237',
    email:'marpeña@gmail.com',
    password: 'gfdg654745',  
},
{
    id: 3,
    name: 'rodrigo',
    apellido: 'sanchez',
    direccion:'alem 765',
    email:'rosanchez@gmail.com' ,
    password: 'jskcyhfdc5',  
},
{
    id: 4,
    name: 'alberto',
    apellido: 'bocetti',
    direccion: 'lima 125',
    email:'bocetti@gmail.com' ,
    password: 'jkcvasicvbn',  
},
    
];


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
   public alumnos: alumnos[] = ELEMENT_DATA;

    constructor (   private matDialog: MatDialog
   ) {}
   crearUsers(): void {
   this.matDialog.open(UsersCrearUsuarioComponent).afterClosed().subscribe({
    next: (valor) => {
        if (valor) {
            this.alumnos = [
                ...this.alumnos,{
                    id: this.alumnos.length + 1,
                    name: valor.name,
                    apellido: valor.apellido,
                    direccion: valor.direccion,
                    email: valor.email,
                    password: valor.password,
                },
            ];          
    }
    else{}
        },       
   });
   } 
   borraralumno(borraralumno: alumnos): void {
    if(confirm(`desea eliminar a ${borraralumno.name}?`)){
        this.alumnos = this.alumnos.filter((al) => al.id !== borraralumno.id); 
    }
}
    editaralumno(editaralumno: alumnos): void{
        this.matDialog.open(UsersCrearUsuarioComponent , {data: editaralumno}).afterClosed().subscribe({
            next: (alumnoeditado) => {
                if (alumnoeditado) {
                    this.alumnos = this.alumnos.map((alumno) => {
                        return alumno.id === editaralumno.id ?{...alumno, ...alumnoeditado}: alumno;
                    })
                }
            },       
           });
    }

}
