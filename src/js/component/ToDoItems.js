import React from 'react'

export default function TodoItem({todo, onCompleted, onDeletedItem}) {

    const getStyle = () => {
        return {
            textDecoration: todo.completed ? 'line-through' : 'none' ,
            margin: '20px',
            borderRadius: '5px',
            backgroundColor: '#10394D',
            paddingLeft: '5px',
            marginBottom: '5px',
            marginTop: '5px'
        }
    }
  return (
    <div style={getStyle()}>
        <input style={{margin:10}} type='checkbox' checked = {todo.completed} 
        onChange = {() => onCompleted(todo.id)} />
        {todo.task}
        <button className='add-btn' onClick={()=> onDeletedItem(todo.id)} >X</button>
    </div>
  )
}