export interface TechResponse {
    status:       string;
    totalResults: number;
    articles:     Article[];
}

export interface Article {
    source:      Source;
    author:      null | string;
    title:       string;
    description: string;
    url:         string;
    urlToImage:  string;
    publishedAt: Date;
    content:     string;
}

export interface Source {
    id:   ID;
    name: Name;
}

export enum ID {
    Techcrunch = "techcrunch",
    TheNextWeb = "the-next-web",
}

export enum Name {
    TechCrunch = "TechCrunch",
    TheNextWeb = "The Next Web",
}
