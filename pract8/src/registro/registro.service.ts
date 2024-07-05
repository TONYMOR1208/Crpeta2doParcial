import { Injectable } from '@nestjs/common';
import { CreateRegistroDto } from 'src/registro/dto/create-registro.dto';
import { UpdateRegistroDto } from 'src/registro/dto/update-registro.dto';
import { Socket } from 'socket.io';

const registros = [
  {
    id: 1 ,
    deletreo: "P-E-R-RO",
    silabas: "2",
    fonetica: "PE'RO",
    IdiomaId:1 ,
    PalabraId: 1
  },
  {
    id: 2 ,
    deletreo: "C-A-S-A",
    silabas: "2",
    fonetica: "KASA",
    IdiomaId:1 ,
    PalabraId: 2
  },
  {
    id: 3 ,
    deletreo: "G-A-T-O",
    silabas: "2",
    fonetica: "GATO",
    IdiomaId:1 ,
    PalabraId: 3
  }
];

interface User{
  id: string;
  nombre: string;
  isActive: boolean
}


interface ConnectedClients{
  [id: string]: {
    socket: Socket;
    user: User;
  }
}

const users: User[] = [
  {id: '1', nombre: 'user1', isActive: true},
  {id: '2', nombre: 'user2', isActive: false},
  {id: '3', nombre: 'user3', isActive: true},
 ];

@Injectable()
export class RegistroService {

  private connectedClients: ConnectedClients = {};

  registerClient(socket: Socket, userId: string){
    const user = users.find(user => user.id === userId);
      if(!user){
        throw new Error('Usuario no encontrado')
      }
      if (!user.isActive){
        throw new Error('El usuario no está activo');
      }
      const userConnections = Object.values(this.connectedClients).filter(
        client => client.user.id === user.id
    );

    if (userConnections.length >= 3) {
        throw new Error('Usuario ya tiene 3 conexiones activas');
    }

      this.connectedClients[socket.id] = {
        socket: socket,
        user: user
      };
  }

  

  removeClient(clienteId: string){
    delete this.connectedClients[clienteId];
  }

  getConnectedClients():string[]{
    return Object.keys(this.connectedClients);
  }

  getUserFullName(socketId: string): string{
    return this.connectedClients[socketId].user.nombre;
  }

  checkUserConnection(user: User){
    for (const clientId of  Object.keys(this.connectedClients)) {
      const connectedClient = this.connectedClients[clientId];
      if (connectedClient.user.id === user.id) {
          // throw new Error('User is already connected');
          connectedClient.socket.disconnect();
          break;
      }
    }
  }

  create(createRegistroDto: CreateRegistroDto) {
    registros.push(createRegistroDto);
    return createRegistroDto; 
  }

  findAll() {
    return registros;
  }
}
