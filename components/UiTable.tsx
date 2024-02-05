'use client'
import React, { useOptimistic } from 'react'
import toast from 'react-hot-toast'
import { Table, TableBody, TableColumn, User, TableHeader, Tooltip, TableCell, TableRow, Pagination } from '@nextui-org/react'
import { DeleteIcon } from './ui/DeleteIcon'
import { EditIcon } from './ui/EditIcon'
import { deleteUser } from '@/actions/user'
import Link from 'next/link'

const UiTable = ({data}:{data:any}) => {

  const [optimisticData,addOptimisticData] = useOptimistic(
    data,
    (state,deleteData:any) => {
      return state.filter((item:any) => item.id != deleteData);
    }
  )

  const [page, setPage] = React.useState(1);
  const rowsPerPage = 5;
  const pages = Math.ceil(optimisticData.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return optimisticData.slice(start, end);
  }, [page, optimisticData]);

  // delete user
  async function reqForDeleteUser(id: string) {
    addOptimisticData(id);
    toast.success('User delete successfully !');
    await deleteUser(id);
  }

  return (
    <>
          <Table
            aria-label="User Table"
            isStriped
            className='w-[80%] h-auto p-2 m-auto mt-5'
            bottomContent={
              <div className="flex w-full justify-center">
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="primary"
                  page={page}
                  total={pages}
                  onChange={(page) => setPage(page)}
                />
              </div>
            }
            classNames={{
              wrapper: "min-h-[222px]",
            }}
          >
            <TableHeader>
              <TableColumn className='capitalize'>s.no</TableColumn>
              <TableColumn className='capitalize'>name</TableColumn>
              <TableColumn className='capitalize'>email</TableColumn>
              <TableColumn className='capitalize cursor-pointer' >phone</TableColumn>
              <TableColumn className='capitalize'>country</TableColumn>
              <TableColumn className='capitalize'>Actions</TableColumn>
            </TableHeader>

            {
              optimisticData.length !== 0 ? (
                <TableBody items={items}>
                  {(user: any) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.id}</TableCell>
                      <TableCell>
                        <Tooltip color='primary' content={user.name} placement='right'>
                          <User
                            className='cursor-pointer'
                            avatarProps={{ radius: "lg", src: user.image }}
                            description={user.jobtype}
                            name={user.name}
                          >{user.name}
                          </User>
                        </Tooltip>
                      </TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.phone}</TableCell>
                      <TableCell>{user.country}</TableCell>
                      <TableCell>
                        <div className='flex gap-x-3'>
                          <Tooltip content="Edit user">
                            <Link href={`/user/${user.id}`} className="text-lg text-default-400 cursor-pointer active:opacity-50">
                              <EditIcon />
                            </Link>
                          </Tooltip>
                          <Tooltip color="danger" content="Delete user">
                            <span onClick={() => reqForDeleteUser(user.id)} className="text-lg text-danger-400 cursor-pointer active:opacity-50">
                              <DeleteIcon />
                            </span>
                          </Tooltip>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              ) : (
                <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
              )
            }

          </Table>
      
    </>
  )
}

export default UiTable