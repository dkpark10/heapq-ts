import HeapQueue from './heap_q';
describe('우선순위 큐 테스트', function () {
    test('오름차순 숫자', function () {
        var pq = new HeapQueue();
        expect(pq.size()).toEqual(0);
        expect(pq.isEmpty()).toEqual(true);
        pq.push(123);
        expect(pq.size()).toEqual(1);
        expect(pq.isEmpty()).toEqual(false);
        pq.push(2);
        pq.push(46);
        pq.push(1);
        pq.push(55);
        expect(pq.size()).toEqual(5);
        expect(pq.top()).toEqual(123);
        pq.pop();
        pq.pop();
        expect(pq.size()).toEqual(3);
        expect(pq.top()).toEqual(46);
        pq.pop();
        pq.pop();
        pq.pop();
        pq.pop();
        expect(pq.size()).toEqual(0);
        expect(pq.isEmpty()).toEqual(true);
    });
    test('내림차순 숫자', function () {
        var pq = new HeapQueue(true);
        expect(pq.size()).toEqual(0);
        expect(pq.isEmpty()).toEqual(true);
        pq.push(123);
        expect(pq.size()).toEqual(1);
        expect(pq.isEmpty()).toEqual(false);
        pq.push(2);
        pq.push(46);
        pq.push(1);
        pq.push(55);
        expect(pq.size()).toEqual(5);
        expect(pq.top()).toEqual(1);
        pq.pop();
        expect(pq.size()).toEqual(4);
        expect(pq.top()).toEqual(2);
        pq.pop();
        pq.pop();
        pq.pop();
        pq.pop();
        expect(pq.size()).toEqual(0);
        expect(pq.isEmpty()).toEqual(true);
    });
    test('객체 테스트', function () {
        var p1 = {
            height: 3222,
            weight: 22,
            grade: 1,
        };
        var p2 = {
            height: 3222,
            weight: 22,
            grade: 9,
        };
        var p3 = {
            height: 88,
            weight: 4532,
            grade: 1,
        };
        var p4 = {
            height: 88,
            weight: 184,
            grade: 2,
        };
        var pq = new HeapQueue(function (prev, next) {
            if (prev.height === next.height) {
                if (prev.weight === next.weight) {
                    return prev.grade - next.grade;
                }
                return next.weight - prev.weight;
            }
            return next.height - prev.height;
        });
        pq.push(p1);
        pq.push(p2);
        pq.push(p3);
        pq.push(p4);
        expect(pq.top()).toEqual(p1);
        pq.pop();
        expect(pq.top()).toEqual(p2);
    });
});
//# sourceMappingURL=heap_q.test.js.map