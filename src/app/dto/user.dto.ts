export class UserDto {

    id: number;

    name: string;

    screen_name: string;

    url: string;

    location: string;

    picture_url: string;

    header_picture: string;

    about: string;

    counts: {
        maps: number,
    };
}