import React from 'react'
import styled from 'styled-components'
import { useTable, useSortBy } from 'react-table'

import makeData from './makeData'

const Styles = styled.div`
  margin-top: 30px;

  table {
    border-spacing: 0;
    background: #ffffff;
    box-shadow: 0px 4px 30px rgba(139, 147, 179, 0.18);
    border-radius: 5px;
    width: 100%;
    table-layout: fixed;

    thead {
      font-size: 14px;
      color: #8b93b3;
    }

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    td {
      font-weight: 600;
      font-size: 14px;
      color: #000000;
    }

    th,
    td {
      margin: 0;
      padding: 15px 0;
      border-bottom: 2px solid rgba(207, 213, 233, 0.62);
      text-align: center;

      :last-child {
        border-right: 0;
      }
    }
  }
  @media screen and (max-width: 768px) {
    table {
      border: none;
      background: none;
      box-shadow: none;
      td {
        border: none;
        border-bottom: 1px solid #ddd;
        display: block;
        font-size: 0.8em;
        text-align: right;
        padding: 15px 10px;
        ::before {
          content: attr(data-label);
          float: left;
          font-weight: bold;
          text-transform: uppercase;
        }
      }
      thead {
        border: none;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }
      tr {
        display: block;
        margin-bottom: 25px;
        background: #ffffff;
        box-shadow: 0px 4px 30px rgba(139, 147, 179, 0.18);
        border-radius: 5px;
      }
    }
  }
`

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data
    },
    useSortBy
  )

  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  const firstPageRows = rows

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      data-label={cell.render('Header')}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <br />
    </>
  )
}

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Имя',
        accessor: 'firstName'
      },
      {
        Header: 'Фамилия',
        accessor: 'lastName'
      },
      {
        Header: 'Правильные',
        accessor: 'correct'
      },
      {
        Header: 'Неправильные',
        accessor: 'incorrect'
      },
      {
        Header: 'Потраченное время',
        accessor: 'time'
      },
      {
        Header: 'Дата окончания',
        accessor: 'date'
      }
    ],
    []
  )

  const data = React.useMemo(() => makeData(20), [])

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  )
}

export default App
