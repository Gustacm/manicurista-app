import { Timestamp } from 'firebase/firestore';

export type TrabajoCategoria = 'acrilicas' | 'gel' | 'nail-art' | 'decorado';

export interface Trabajo {
  id: string;
  titulo: string;
  descripcion: string;
  imageUrl: string;
  categoria: TrabajoCategoria;
  destacado: boolean;
  orden: number;
  tags: string[];
  likes: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export type TrabajoData = Omit<Trabajo, 'id' | 'createdAt' | 'updatedAt'>;
