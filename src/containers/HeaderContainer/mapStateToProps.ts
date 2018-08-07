import {ICombinedState} from 'src/interfaces/ICombinedState';

export const mapStateToProps = (state: ICombinedState): { data: any } => (
    {
        data: {
            isLoggedIn: state.common.authToken !== null,

            countryId: state.common.countryId,
            cropId: state.common.cropId,
            crops: state.common.crops,
            // progressViewMetricsParameterId: state.progressView.progressViewMetricsParameterId
        }
    }
);
