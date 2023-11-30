import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, removeTodo } from '../actions/index'

const Todo = () => {

    const [inputData, setInputData] = useState('')
    const {list} = useSelector((state) => state.todoReducers)
    const dispatch = useDispatch()

    useEffect(() => {
        // console.log(list)
    }, [list])
    
  return (
    <div>
        <div>
            <figure>
                <figcaption> Add your list Here</figcaption>

                <div>
                    <input type='text' placeholder='Add Item...' value={inputData} onChange={(event) => setInputData(event.target.value)} />
                    <a href='#' onClick={() => dispatch(addTodo(inputData),
                        setInputData(''))}>+</a>
                </div>
            </figure>
        </div>


<br /> <br /> <hr />

                <div>
                    {list.length == 0 ?
                        <h3>No list yet</h3> :
                        list.map((elem) => (
                            <div key={elem.id}>
                                <h3>{elem.data} <span><a href='#' onClick={() => dispatch(deleteTodo(elem.id))}>Delete</a></span></h3>
                            </div>
                        ))
                    }


<br /> <br />
                <h3><a href='#' onClick={() => dispatch(removeTodo())}>Delete All</a></h3>
                </div>
    </div>
  )
}

export default Todo