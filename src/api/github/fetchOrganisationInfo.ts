import {Config} from '../../config';
import {CacheService} from '../../services/CacheService';
import {fetchData} from './utils/fetchData';
import {IOrganisationInfo} from 'src/interfaces/IOrganisationInfo';

export const fetchOrganisationInfo = async (organisationId: string): Promise<IOrganisationInfo> => {

    const cacheKey = `organisation_${organisationId}`;

    const cachedOrganisationInfo = CacheService.getData<IOrganisationInfo>(cacheKey);
    if (cachedOrganisationInfo !== undefined) {
        return cachedOrganisationInfo;
    }

    const resp = await fetchData<any>(`${Config.BasePath}/orgs/${organisationId}`);

    const organisationInfo = await resp.data;

    CacheService.saveData<IOrganisationInfo>(cacheKey, organisationInfo);

    return organisationInfo;
};
