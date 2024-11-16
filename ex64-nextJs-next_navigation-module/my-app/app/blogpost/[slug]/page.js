"use client"
import React, {useEffect} from 'react'
import { useParams, useRouter } from 'next/navigation'

const page = () => {
    const params = useParams()
    //link {NavLink} can also be used instead of useRouter,  but useRouter can be used to perform it programatically and we can perform other operations or add functionalities like delay (to redirect) using useEffect..!
    const router = useRouter()
   
    // useEffect(() => {
    //     setTimeout(() => {
    //         router.push('/about')
    //     }, 2000);
    // }, [])
    
    
    return (
        <div>
            <div>
                {params.slug}
            </div>
            <div>
                <button type="button" onClick={() => router.push('/about')}>
                    About
                </button>
            </div>
        </div>
    )
}

export default page
