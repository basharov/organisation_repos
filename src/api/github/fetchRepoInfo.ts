import {fetchData} from './utils/fetchData';
import {Config} from '../../config';

export const fetchRepoInfo = async (organisationId: string, repoName: string) => {
    return fetchData(`${Config.BasePath}/repos/${organisationId}/${repoName}`);
};
