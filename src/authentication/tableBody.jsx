import React, { useMemo, useEffect, useState } from 'react'
import { Button, Container, Table, Grid } from '@material-ui/core'
import firebase from '../util/firebase'
import { useHistory, useLocation } from 'react-router-dom'
import { useTable } from 'react-table'
import profile from '../usersData'
const TableBody = () => {
  const style = { marginTop: '100px' }
  const history = useHistory()
  const location = useLocation()
  const [myUsers, setMyUsers] = useState()

  const logoutUser = () => {
    firebase.auth().signOut()
    history.push('/login')
  }

  const getAllUsers = () => {
    // const todoRef = firebaseConfig.database().ref('User')
    // todoRef.on('value', (snapshot) => {
    //   const user = snapshot.val()
    // const userList = []
    // for (let id in user) {
    //   userList.push({ id, ...user[id] })
    // }
    // setUsers(userList)
    // setTodoList(todoList);
    // })

    const usersRef = firebase.database().ref('users')

    usersRef.on('value', (snapshot) => {
      const allUsers = snapshot.val()

      const usersList = []
      for (let id in allUsers) {
        usersList.push({ id, ...allUsers[id] })
      }
      setMyUsers(usersList)
    })
  }

  // console.log('the usersList ahdsakjd', myUsers)
  useEffect(() => {
    getAllUsers
  }, [])

  const data = useMemo(() => myUsers, [myUsers])

  const columns = useMemo(() => [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Password',
      accessor: 'password',
    },
    {
      Header: 'Action',
      accessor: 'Action',
      // eslint-disable-next-line react/display-name
      Cell: (cell) => (
        <Button
          variant="contained"
          color="primary"
          value={cell.accessor}
          onClick={() => history.push('/edit-user')}
        >
          Edit
        </Button>
      ),
    },
  ])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  const addNewUser = () => {
    console.log('New use is going to be add')
  }
  return (
    <Container size="sm">
      <div style={style}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <h4>Welcome:</h4>
            <h5>{location.state.email}</h5>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" onClick={addNewUser}>
              Add New User
            </Button>
            &nbsp;&nbsp;
            <Button variant="contained" color="primary" onClick={logoutUser}>
              Logout
            </Button>
          </Grid>
        </Grid>
        <br />

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
                  <th {...column.getHeaderProps()}> {column.render('Header')} </th>
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
        </Table>
      </div>
    </Container>
  )
}
export { TableBody }
