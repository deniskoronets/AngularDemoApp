export class MapDto {

    public id: number;

    public counts: {subscriptions: number, spots: number, comments: number, impressions: number, respots: number, attachments: number};

    public title: string;

    public description: string;
}