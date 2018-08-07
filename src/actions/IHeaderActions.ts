import {VoidFunctionWithoutArguments} from 'src/interfaces/VoidFunctionWithoutArguments';

export interface IHeaderActions {
    /*
        readonly setMetricsParameter: UserActionFunction<SetMetricsParameterActionPayload>;
        readonly setCrop: UserActionFunction<SetCropActionPayload>;
        readonly setCountry: UserActionFunction<SetCountryActionPayload>;
    */

    readonly sendLogoutRequest: VoidFunctionWithoutArguments;
}
