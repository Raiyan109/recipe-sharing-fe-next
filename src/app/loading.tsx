import Loading from '@/components/shared/loading/Loading'
import React from 'react'

const GlobalLoading = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <Loading />
        </div>
    )
}

export default GlobalLoading