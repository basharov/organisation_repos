import {Action, Dispatch} from 'redux';
import {IHeaderActions} from '../../actions/IHeaderActions';

export const mapDispatchToProps = (dispatch: Dispatch<Action>): { actions: IHeaderActions } => {
    return {
        actions: {
            /*
                        setCrop: (payload: SetCropActionPayload) => {
                            dispatch<SetCropAction>({type: ViewsActions.SetCommonCrop, payload});
                        },

                        setCountry: (payload: SetCountryActionPayload) => {
                            dispatch<SetCountryAction>({type: ViewsActions.SetCommonCountry, payload});
                        },

            */
            sendLogoutRequest: () => {
                // dispatch({type: LogoutUserQuery.LogoutUserRequested});
            }

        }
    };
};
