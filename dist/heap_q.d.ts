export type Comparator<T> = {
    max?: boolean;
    min?: boolean;
} | ((a: T, b: T) => number);
export declare class HeapQueue<T> {
    private list;
    private readonly comparator;
    constructor(comparator?: Comparator<T>);
    private swap;
    compare(current: T, target: T): boolean;
    push(item: T): void;
    pop(): T;
    size(): number;
    isEmpty(): boolean;
    top(): T;
    clear(): void;
}
