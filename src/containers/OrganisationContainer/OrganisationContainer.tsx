import {mapStateToProps} from './mapStateToProps';
import {mapDispatchToProps} from './mapDispatchToProps';
import {connect} from 'react-redux';
import {OrganisationView} from '../../components/OrganisationView/OrganisationView.sfc';
import {withRouter} from 'react-router';

export const OrganisationContainer =
    withRouter(
        connect(
            mapStateToProps,
            mapDispatchToProps
        )(OrganisationView));
