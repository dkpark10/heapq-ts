export type comparator<T> = boolean | ((a: T, b: T) => number);
export default class HeapQueue<T> {
    private readonly list;
    private readonly comparator;
    private readonly ascending;
    constructor(comparator?: comparator<T>);
    private swap;
    compare(current: T, target: T): boolean;
    push(item: T): void;
    pop(): void;
    size(): number;
    isEmpty(): boolean;
    top(): T;
}
