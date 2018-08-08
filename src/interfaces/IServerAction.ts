export interface IServerAction<T> {
    type: string;
    payload: {
        id: string;
        data: T;
    };
}
