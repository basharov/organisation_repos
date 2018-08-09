import * as React from 'react';
import {Component, createRef, RefObject} from 'react';
import {IRateLimitsViewData} from './interfaces/IRateLimitsViewData';
import {RateLimitsViewArea} from './RateLimitsView.style';
import {getMinutesBeforeReset} from '../../api/github/utils/getMinutesBeforeReset';

interface IRateLimitsViewProps {
    data: IRateLimitsViewData;
}

export class RateLimitsView extends Component<IRateLimitsViewProps> {
    private limitTimeCounter: RefObject<HTMLSpanElement>;
    private timeCounterInterval: number;

    constructor (props: IRateLimitsViewProps) {
        super(props);
        this.limitTimeCounter = createRef();
    }

    public componentDidUpdate () {
        this.startUpdating();
    }

    public render () {
        const {rateLimitRemaining, rateLimit} = this.props.data.rateLimits;

        return (
            <RateLimitsViewArea>
                <span>{rateLimitRemaining} requests of {rateLimit} remaining.
                Limits will reset in <span ref={this.limitTimeCounter}>0</span> minutes</span>
            </RateLimitsViewArea>
        );
    }

    public componentWillUnmount () {
        window.clearInterval(this.timeCounterInterval);
    }

    private startUpdating () {
        const counterSpan = this.limitTimeCounter.current!;

        const {rateLimitResetTimestamp} = this.props.data.rateLimits;

        let minutesBetween = getMinutesBeforeReset(rateLimitResetTimestamp);
        counterSpan.textContent = minutesBetween.toString();

        window.clearInterval(this.timeCounterInterval);

        this.timeCounterInterval = window.setInterval(() => {
            minutesBetween = getMinutesBeforeReset(rateLimitResetTimestamp);
            counterSpan.textContent = minutesBetween.toString();
        }, 60 * 1000);
    }
}

