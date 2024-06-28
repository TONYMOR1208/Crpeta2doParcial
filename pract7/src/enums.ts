

import { registerEnumType } from '@nestjs/graphql';

export enum Estado {
  ACTIVO = 'ACTIVO',
  PENDIENTE = 'PENDIENTE',
  ELIMINADO = 'ELIMINADO',
}

registerEnumType(Estado, {
  name: 'Estado',
  description: 'Estado de la entidad',
});

export default Estado;
