import React, { useMemo, useState } from 'react'
import { useTable, useSortBy } from 'react-table'
import { Table, Container, Button } from '@material-ui/core'
import profile from '../usersData'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import {
    // useParams,
    useHistory,
} from 'react-router-dom'
const ReactTableExample = () => {
    const history = useHistory()
    const data = useMemo(() => profile, [])

    const columns = useMemo(
        () => [
            {
                Header: 'Id',
                Footer: 'Id',
                accessor: 'id',
            },
            {
                Header: 'Name',
                Footer: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Age',
                Footer: 'Age',
                accessor: 'age',
            },
            {
                Header: 'Designation',
                Footer: 'Designation',
                accessor: 'designation',
            },
            {
                Header: 'Company',
                Footer: 'Company',
                accessor: 'company',
            },
            {
                Header: 'Actions',
                Footer: 'Actions',
                accessor: 'Actions',
                // eslint-disable-next-line react/display-name
                Cell: (cell) => (
                    <Button
                        variant="contained"
                        color="primary"
                        value={cell.accessor}
                        onClick={() => history.push('/edit-user', { rows: cell.row.original })}
                    >
                        Edit
                    </Button>
                ),
            },
        ],
        [],
    )
    const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow } = useTable(
        { columns, data },
        useSortBy,
    )
    const style = { marginTop: '100px' }
    return (
        <Container size="lg" style={style}>
            <Table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        // eslint-disable-next-line react/jsx-key
                        <tr
                            {...headerGroup.getHeaderGroupProps()}
                            style={{
                                borderBottom: 'solid 3px red',
                                background: 'aliceblue',
                                color: 'black',
                                fontWeight: 'bold',
                            }}
                        >
                            {headerGroup.headers.map((column) => (
                                // eslint-disable-next-line react/jsx-key
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {' '}
                                    {column.render('Header')}{' '}
                                    <span>
                                        {column.isSorted ? (
                                            column.isSortedDesc ? (
                                                <ArrowDownwardIcon />
                                            ) : (
                                                // eslint-disable-next-line react/jsx-no-undef
                                                <ArrowUpwardIcon />
                                            )
                                        ) : (
                                            ''
                                        )}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)

                        return (
                            // eslint-disable-next-line react/jsx-key
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    // eslint-disable-next-line react/jsx-key
                                    return (
                                        // eslint-disable-next-line react/jsx-key
                                        <td
                                            {...cell.getCellProps()}
                                            style={{
                                                padding: '10px',
                                                border: 'solid 1px gray',
                                                background: 'papayawhip',
                                            }}
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    {footerGroups.map((footerGroup) => (
                        // eslint-disable-next-line react/jsx-key
                        <tr
                            {...footerGroup.getFooterGroupProps()}
                            style={{
                                borderBottom: 'solid 3px red',
                                background: 'aliceblue',
                                color: 'black',
                                fontWeight: 'bold',
                            }}
                        >
                            {footerGroup.headers.map((column) => (
                                // eslint-disable-next-line react/jsx-key
                                <td {...column.getFooterProps()}>{column.render('Footer')}</td>
                            ))}
                        </tr>
                    ))}
                </tfoot>
            </Table>
        </Container>
    )
}

export { ReactTableExample }
