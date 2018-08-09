export interface IRateLimits {
    rateLimit: number;
    rateLimitRemaining: number;
    rateLimitResetTimestamp: number;
}
