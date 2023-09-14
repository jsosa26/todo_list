import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos, onCompleted, onDeletedItem}) {
  return (
    <div>
        {
            todos.map((todo,index) => (
                    <TodoItem key={`todo-${index}`} todo= {todo} onCompleted = {onCompleted} onDeletedItem={onDeletedItem}/>
            ))
        }
    </div>
  )
}