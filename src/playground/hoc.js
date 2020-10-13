import React from 'react'
import ReactDOM from 'react-dom'

const Info =(props)=>(
    <div>
    <h1>Info</h1>
    <p>This info is :{props.info}</p>
    </div>
);

const widthAdminWarning=(WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAdmin && <p>This is Private Info </p>}
                <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication=(WrappedComponent)=>{
    return (props)=>(
        <div>
        {props.isAuthenticated ? (<WrappedComponent {...props}/>):(<p>Please Login to view this Info</p>)}
        </div>
    )
}

const AuthInfo = requireAuthentication(Info)

const AdminInfo=widthAdminWarning(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are details" />,document.getElementById('app'))

ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are details" />,document.getElementById('app'))

