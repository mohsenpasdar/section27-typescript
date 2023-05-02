class Todo {
    id: string
    text: string

    constructor(todoText: string) {
        this.text = todoText
        this.id = Math.random().toString(36).slice(2, 11)
    }
}

export default Todo