
import { DataTable } from "primereact/datatable";

// type Props = {
//     value: any,
//     children?: React.ReactNode,
//     dataKey: any,
//     selection?: any,
//     onSelectionChange: any,
//     onRowSelect: any,
//     onRowUnselect: any,
//     filters: any,
//     globalFilterFields: any,
//     emptyMessage: any,
//     header: any,
//     selectionMode: any

// }

function Table({ value, children, filters, globalFilterFields, emptyMessage, header, className = 'table-customers' }: any) {
    return (
        <DataTable
            header={header}
            value={value}
            paginator rows={5}
            emptyMessage={emptyMessage}
            filters={filters}
            globalFilterFields={globalFilterFields}
            rowsPerPageOptions={[5, 10, 25]}
            tableStyle={{ minWidth: "50rem", minHeight: "50vh", }}
            className={className}
        >
            {children}
        </DataTable>
    )
}

export default Table