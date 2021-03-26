import React from 'react'
import {useSelector ,useDispatch} from 'react-redux'
import {fetchUsers} from './../allActions'
import {loadMore} from './../allActions'
const APIGEN = () => {
  const state = useSelector(state => state.users)
  const dispatch = useDispatch()
    return (
        <div>
            {state.map((e) => <div>{e.name}</div>)}

            <button onClick={dispatch(fetchUsers())}>get data</button>
            <button onClick= {dispatch(loadMore())}>load more</button>
            
        </div>
    )
}

export default APIGEN
