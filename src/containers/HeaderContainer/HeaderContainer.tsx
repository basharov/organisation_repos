import {mapStateToProps} from './mapStateToProps';
import {mapDispatchToProps} from './mapDispatchToProps';
import {HeaderView} from 'src/components/HeaderView/HeaderView';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';


export const HeaderContainer =
    withRouter(connect(
        mapStateToProps,
        mapDispatchToProps
    )(HeaderView));
