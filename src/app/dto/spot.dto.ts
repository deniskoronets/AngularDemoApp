export class SpotDto {
    id: number;

    title: string;

    description: string;

    user: {id: number, name: string};

    lat: number;

    lon: number;
}