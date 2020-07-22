export interface SearchResults {
    totalItems: number;
    items: BookInfo[]
}

export interface BookInfo {
    id: string;
    volumeInfo: VolumeInfo;
}
export interface VolumeInfo {
    title: string;
    subtitle?: string;
    description?: string;
    authors: string[];
    imageLinks: {
        smallThumbnail: string;
        thumbnail: string;
    }
}
