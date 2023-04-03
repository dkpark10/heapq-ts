var Heap_Queue = (function () {
    function Heap_Queue(comparator) {
        this.list = [];
        this.ascending = false;
        this.comparator = comparator || false;
    }
    Heap_Queue.prototype.swap = function (idx1, idx2) {
        var _a;
        _a = [this.list[idx2], this.list[idx1]], this.list[idx1] = _a[0], this.list[idx2] = _a[1];
    };
    Heap_Queue.prototype.compare = function (current, target) {
        if (typeof this.comparator === "boolean") {
            if (this.comparator === this.ascending) {
                return current > target;
            }
            else {
                return current < target;
            }
        }
        return this.comparator(current, target) < 1;
    };
    Heap_Queue.prototype.push = function (item) {
        this.list.push(item);
        var idx = this.list.length - 1;
        var parentNodeIndex = Math.ceil(idx / 2) - 1;
        if (this.list.length === 1) {
            return;
        }
        while (idx > 0 && this.compare(item, this.list[parentNodeIndex])) {
            this.swap(idx, parentNodeIndex);
            idx = Math.ceil(idx / 2) - 1;
            parentNodeIndex = Math.ceil(idx / 2) - 1;
        }
    };
    Heap_Queue.prototype.pop = function () {
        if (this.isEmpty()) {
            return;
        }
        this.list[0] = this.list.slice(-1)[0];
        this.list.pop();
        var idx = 0;
        while (idx * 2 < this.list.length - 1) {
            var leftChildIndex = idx * 2 + 1;
            var rightChildIndex = idx * 2 + 2;
            if (this.list[leftChildIndex] === undefined) {
                break;
            }
            if (this.list[rightChildIndex] === undefined) {
                if (!this.compare(this.list[idx], this.list[leftChildIndex])) {
                    this.swap(idx, leftChildIndex);
                }
                break;
            }
            if (this.compare(this.list[idx], this.list[leftChildIndex])
                && this.compare(this.list[idx], this.list[rightChildIndex])) {
                break;
            }
            if (this.compare(this.list[leftChildIndex], this.list[rightChildIndex])) {
                this.swap(idx, leftChildIndex);
                idx = leftChildIndex;
            }
            else {
                this.swap(idx, rightChildIndex);
                idx = rightChildIndex;
            }
        }
    };
    Heap_Queue.prototype.size = function () {
        return this.list.length;
    };
    Heap_Queue.prototype.isEmpty = function () {
        return this.list.length <= 0;
    };
    Heap_Queue.prototype.top = function () {
        return this.list[0];
    };
    return Heap_Queue;
}());
export default Heap_Queue;
//# sourceMappingURL=heap_q.js.map