import * as parseLinkHeader from 'parse-link-header';
import {IPaging} from 'src/interfaces/IDataResponse';

export const getPagingInfo = (headers: Headers): IPaging | undefined => {

    const linkString = headers.get('Link') || '';

    const parseResult = parseLinkHeader(linkString);

    return parseResult !== null ? parseResult : undefined;
};
