import React from 'react';
import {Outlet} from 'react-router-dom'

function ReportView({children}) {
    return (
        <div>
            {children}
            <h1>ReportView</h1>
        </div>
    )
}

export default ReportView
