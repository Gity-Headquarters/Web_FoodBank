
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

function Table({ value, children, selectionMode, dataKey, selection, onSelectionChange, onRowSelect, onRowUnselect, filters, globalFilterFields, emptyMessage, header, className = 'table-customers' }: any) {
    return (
        <DataTable
            header={header}
            value={value}
            selectionMode={selectionMode}
            onRowUnselect={onRowUnselect}
            selection={selection}
            onSelectionChange={onSelectionChange}
            dataKey={dataKey}
            onRowSelect={onRowSelect}
            paginator rows={8}
            emptyMessage={emptyMessage}
            filters={filters}
            globalFilterFields={globalFilterFields}
            rowsPerPageOptions={[8, 10, 25, 50]}
            tableStyle={{ minWidth: "50rem", minHeight: "50vh", maxHeight: "55vh" }}
            className={className}
        >
            {children}
        </DataTable>
    )
}

export default Table