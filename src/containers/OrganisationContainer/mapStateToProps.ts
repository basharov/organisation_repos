import {ICombinedState} from '../../interfaces/ICombinedState';

export const mapStateToProps = (state: ICombinedState): { data: any } => {
    return {
        data: {
            repos: state.common.repos
        }
    };
};
