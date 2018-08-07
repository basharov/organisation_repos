import {ICombinedState} from '../../interfaces/ICombinedState';

export const mapStateToProps = (state: ICombinedState): { data: any } => {
    console.log(state)
    return {
        data: {
            organisationId: state.common.organisationId,
            repos: state.common.repos
        }
    };
};
