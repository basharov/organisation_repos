import {IRateLimits} from '../../../interfaces/IRateLimits';

export const getRateLimits = (headers: Headers): IRateLimits => {
    const rateLimit = Number(headers.get('X-RateLimit-Limit'));
    const rateLimitRemaining = Number(headers.get('X-RateLimit-Remaining'));
    const rateLimitResetTimestamp = Number(headers.get('X-RateLimit-Reset')) * 1000;

    return {
        rateLimit,
        rateLimitRemaining,
        rateLimitResetTimestamp,
    };
};
