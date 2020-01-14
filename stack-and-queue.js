class _Node {
    constructor(value, next) {
        this.value = value
        this.next, next
    }
}
class Stack {
    constructor() {
        this.top = null
    }

    push(data) {
        // If the stack is empty, then the node will be the
        // top of the stack
        if (this.top === null) {
            this.top = new _Node(data, null)
            return this.top
        }

        // If the stack already has something, then create 
        // a new node, add data the new node, and have 
        // the pointer point to the top
        const node = new _Node(data, this.top)
        this.top = node
    }

    pop() {
        // In order to remove the top of the stack, you have to 
        // point the pointer to the next item and that next 
        // item becomes the top of the stack
        const node = this.top
        this.top = node.next
        return node.data
    }

}

class Queue {
    constructor() {
        this.first = null
        this.last = null
    }

    enqueue(data) {
        const node = new _Node(data, null)
        if (this.first === null) {
            this.first = node
        }

        if (this.last) {
            this.last.next = node
        }
        this.last = node
    }

    dequeue() {
        if (this.first === null) {
            return
        }
        const node = this.first
        this.first = this.first.next

        if (node === this.last) {
            this.last = null
        }
        return node.value
    }
}

class _DOubleNode {
    constructor(value, previous, next) {
        this.value = value
        this.previous = previous
        this.next = next
    }
}

class DoubleQueue {
    constructor() {
        this.first = null
        this.last = null
    }

    enqueue(data) {
        let node

        if (this.first === null) {
            node = new _DOubleNode(data, null, null)
            this.first = node
        }

        if (this.last) {
            node = new _DoubleNode(data, this.last, null)
            this.last.next = node
        }
        this.last = node
    }

    dequeue() {
        if (this.first === null) {
            return
        }
        const node = this.first
        this.first = this.first.next
        this.first.previous = null

        if (node === this.last) {
            this.last = null
        }
        return node.value
    }
}

function mainStack() {
    const treckStack = new Stack()
    treckStack.push('Kirk')
    treckStack.push('Spock')
    treckStack.push('McCoy')
    treckStack.push('Scotty')
    peek(treckStack)
    isEmpty(treckStack)
    display(treckStack.top)
    is_palindrome('dad')
}

function peek(stack) {
    return console.log(stack.top)
}

function isEmpty(stack) {
    if (stack.top === null) {
        return true
    }
    return false
}

function display(top) {
    let currNode = top

    while(currNode.next !== null) {
        console.log(currNode.value)
        currNode = currNode.next
    }
    return console.log(currNode.value)
}

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
    const letterStack = new Stack()
    for (let i = 0; i < s.length; i++) {
        letterStack.push(s[i])
    }
    let reverseWord = ''
    while (!isEmpty(letterStack)) {
        reverseWord += letterStack.pop()
    }
    if (reverseWord === s) {
        return console.log('***', true)
    }
    return console.log('***', false)
}

function parenthesis(s) {
    s = s.replace(/[^()]/g, '')
    const parenStack = new Stack()
    for (let i = 0; i < s.length; i++) {
        parenStack.push(s[i])
    }
    while (parenStack.top !== null) {
        if (parenStack.pop() === '(') {
            return console.log(false)
        }
        if (parenStack.top === null || parenStack.pop() === ')') {
            return console.log(false)
        }
    }
    return console.log(true)
}

function sort(s) {
    const sorted = new Stack()
    peek(s)
    function recurtSort(temp) {
        if (temp.top.next === null) {
            return sorted.push(temp.top.value)
        }
        let node = temp.top
        let prev = temp.top
        let max = temp.top
        while (node !== null) {
            if (max.value < node.value) {
                max = node
                next = node.next
            }
            prev = node
            node = node.next
        }
        sorted.push(max.value)
        display(sorted.top)
        node = temp.top
        while (node.value !== max.value) {
            prev = node
            node = node.next
        }
        prev.next = node.next
        display(temp.top)
        recurSort(temp)
    }
    recurSort(s)
    return sorted
}

function mainQueue() {
    const treckQ = new Queue()
    treckQ.enqueue('Kirk')
    treckQ.enqueue('Spock')
    treckQ.enqueue('Uhura')
    treckQ.enqueue('Sulu')
    treckQ.enqueue('Checkov')

    console.log(peekQ(treckQ))
    console.log(empty(treckQ))
    displayQ(treckQ)
    treckQ.dequeue()

    const treckDQ = new DoubleQueue()
    treckDQ.enqueue('Kirk')
    treckDQ.enqueue('Spock')
    treckDQ.enqueue('Uhura')
    treckDQ.enqueue('Sulu')
    treckDQ.enqueue('Checkov')
    console.log(peekQ(treckDQ))
    displayQ(treckDQ)
}

mainQueue()

function peekQ(q) {
    return q.first
}

function empty(q) {
    if (qlfirst === null) {
        return true
    }
    return false
}

function displayQ(q) {
    let node = q.first
    while (node !== q.last) {
        console.log(node.value)
        node = node.next
    }
    console.log(node.value)
}

function squareDance() {
    const maleDancers = new Queue()
    const femaleDancers = new Queue()

    function dancers(person) {
        if (person.gender === 'm') maleDancers.enqueue(person.value)
        if (person.gender === 'f') femaleDancers.enqueue(person.value)
    }

    function dance(m, f) {
        while (!empty(m) && !empty(f)) {
            mPerson = m.dequeue()
            fPerson = f.dequeue()
            console.log(mPerson + ' and ' + fPerson)
        }
    }

    dancers({value: 'Jane', gender: 'f'})
    dancers({value: 'Frank', gender: 'm'})
    dancers({value: 'John', gender: 'm'})
    dancers({value: 'Sherlock', gender: 'm'})
    dancers({value: 'Madonna', gender: 'f'})
    dancers({value: 'David', gender: 'm'})
    dancers({value: 'Christopher', gender: 'm'})
    dancers({value: 'Beyonce', gender: 'f'})

    dance(maleDancers, femaleDancers)
}

squareDance()