import {Config} from '../../config';
import {fetchData} from './utils/fetchData';
import {IOrganisationInfo} from 'src/interfaces/IOrganisationInfo';
import {IDataResponse} from '../../interfaces/IDataResponse';

export const fetchOrganisationInfo = async (organisationId: string): Promise<IDataResponse<IOrganisationInfo>> => {
    return await fetchData<IOrganisationInfo>(`${Config.BasePath}/orgs/${organisationId}`, `organisation_${organisationId}`);
};
