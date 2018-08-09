import {Config} from '../../config';
import {CacheService} from '../../services/CacheService';
import {fetchData} from './utils/fetchData';

export const fetchOrganisationInfo = async (organisationId: string) => {

    const cachedOrganisationInfo = CacheService.getOrganisationInfoCache(organisationId);
    if (cachedOrganisationInfo !== undefined) {
        return cachedOrganisationInfo;
    }

    const resp = await fetchData<any>(`${Config.BasePath}/orgs/${organisationId}`);

    const organisationInfo = await resp.data;

    CacheService.saveOrganisationInfoCache(organisationId, organisationInfo);

    return organisationInfo;
};
