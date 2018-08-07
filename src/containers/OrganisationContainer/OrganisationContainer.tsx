import {mapStateToProps} from './mapStateToProps';
import {mapDispatchToProps} from './mapDispatchToProps';
import {connect} from 'react-redux';
import {OrganisationView} from '../../components/OrganisationView/OrganisationView.sfc';

export const OrganisationContainer =
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(OrganisationView);
