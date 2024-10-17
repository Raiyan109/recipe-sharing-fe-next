import Loading from '@/components/shared/loading/Loading'
import React from 'react'

const loading = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <Loading />
        </div>
    )
}

export default loading