import * as moment from 'moment';

export class CommentDto {
    public id: number;

    public body: string;

    public created_at: string;

    public user: {id: number, name: string, screen_name: string};

    public formatCreatedAt(): string {
        return moment(this.created_at).format('MMMM Do YYYY, h:mm:ss a');
    }
}