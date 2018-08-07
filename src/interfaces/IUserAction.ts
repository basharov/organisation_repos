export interface IUserAction<T, P> {
    readonly type: T;
    readonly payload: P;
}
