import { Spot } from './spots';
import { User } from './auth';

export interface Collection {
  id: string;
  name: string;
  description: string | null;
  isPublic: boolean;
  userId: string;
  coverImage: string | null;
  createdAt: string;
  updatedAt: string;
  user: Pick<User, 'id' | 'username' | 'displayName' | 'avatar'>;
  _count: {
    spots: number;
  };
}

export interface CollectionWithSpots extends Collection {
  spots: Spot[];
}

export interface CreateCollectionRequest {
  name: string;
  description?: string | null;
  isPublic?: boolean;
  coverImage?: string | null;
}

export interface UpdateCollectionRequest extends Partial<CreateCollectionRequest> {
  id: string;
}

export interface AddSpotToCollectionRequest {
  collectionId: string;
  spotId: string;
}

export interface RemoveSpotFromCollectionRequest {
  collectionId: string;
  spotId: string;
}
