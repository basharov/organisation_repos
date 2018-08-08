import * as React from 'react';
import {SFC} from 'react';
import {SpinnerBounce1, SpinnerBounce2, SpinnerBounce3, SpinnerWrapper} from './Spinner.style';

export const Spinner: SFC = () => (
    <SpinnerWrapper>
        <SpinnerBounce1/>
        <SpinnerBounce2/>
        <SpinnerBounce3/>
    </SpinnerWrapper>
);
