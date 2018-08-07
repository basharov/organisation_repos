export interface IServerAction<T> {
    readonly type: string;
    readonly payload: {
        readonly id: string;
        readonly data: T;
    };
}
