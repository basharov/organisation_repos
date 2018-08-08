import {mapStateToProps} from './mapStateToProps';
import {mapDispatchToProps} from './mapDispatchToProps';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {SidebarView} from 'src/components/SidebarView/SidebarView.sfc';

export const SidebarContainer =
    withRouter(
        connect(
            mapStateToProps,
            mapDispatchToProps
        )(SidebarView));
