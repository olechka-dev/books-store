import { EntityState } from '@ngrx/entity';

export interface SearchResults {
    totalItems: number;
    items: BookInfo[];
}

export interface BookInfo {
    id: string;
    volumeInfo: VolumeInfo;
    isFavorite?: boolean;
}
export interface VolumeInfo {
    title: string;
    subtitle?: string;
    description?: string;
    authors: string[];
    imageLinks: {
        smallThumbnail: string;
        thumbnail: string;
    };
}

export interface SearchState {
    totalItems: number;
    items: EntityState<BookInfo>;
}
