import { Column } from 'primereact/column'
// import React from 'react'

// type Props = {}

function ColumnTable({ field, header, body, headerClassName }: any) {
    return (
        <Column field={field} header={header} body={body} headerClassName={headerClassName} />
    )
}

export default ColumnTable