import * as parseLinkHeader from 'parse-link-header';
import {IPaging} from 'src/interfaces/IDataResponse';

export const getPagingInfo = (headers: Headers): IPaging | null => {

    const linkString = headers.get('Link') || '';

    return parseLinkHeader(linkString);
};
