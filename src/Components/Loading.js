import React from 'react'
import spinner from './loading.gif'

const Loading = ()=> {
            return (<div className="d-flex align-items-center justify-content-center">
                <img src={spinner} alt="loading" style={{width:'50px'}}/>
            </div>)
        
}

export default Loading;