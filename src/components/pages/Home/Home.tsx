import React, { useEffect, useState } from 'react'
import { useDebounce } from '../../../hooks/debounce'
import { useSearchUsersQuery } from '../../../store/github/github.api'

const Home = () => {
    const { isLoading, isError, data } = useSearchUsersQuery('vlad')
    const [search, setSearch] = useState('')
    const debounced = useDebounce(search)
    useEffect(() => {
        console.log(debounced, 'debounced');

    }, [debounced])

    console.log(data);

    return (
        <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
            {isError && <p className='text-center text-red-600'>Something went wrong...</p>}
            <div className='relative w-[560px]'>
                <input className='border py-2 px-4 w-full h-[42px] mb-2' placeholder='Search for Github username' type="text" value={search} onChange={e => setSearch(e.target.value)} />
                <div className='absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nihil qui, eligendi autem amet, ea, velit dignissimos quidem iusto blanditiis recusandae. Quas, odit non harum voluptatibus officiis ex doloremque sit.</div>
            </div>
        </div>
    )
}

export default Home