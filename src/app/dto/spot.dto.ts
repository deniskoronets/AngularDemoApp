import {MapDto} from './map.dto';
import {UserDto} from './user.dto';

export class SpotDto {
    id: number;

    title: string;

    description: string;

    map?: MapDto;

    lat: number;

    lon: number;

    address?: string;

    category?: any;

    counts: {
        respot: number,
        comments: number,
        attachments: number
    };

    created_at: string;


    logo_picture?: string;

    map_id: number;

    picture_url?: string;

    status: string;

    updated_at?: string;

    url: string;

    user: UserDto;

    user_id: number;
}