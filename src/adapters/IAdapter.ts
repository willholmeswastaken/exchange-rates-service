export interface IAdapter<T> {
    execute(): Promise<T>
}
