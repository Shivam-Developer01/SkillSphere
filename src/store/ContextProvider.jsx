import React,{createContext, useReducer} from 'react'

export const bannerList = createContext([]);

const [bannerList, dispatchPostList] = useReducer([])

function ContextProvider() {
  return (
    <div>
      
    </div>
  )
}

export default ContextProvider
