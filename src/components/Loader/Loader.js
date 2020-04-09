import React, { useContext } from 'react'
import BounceLoader from 'react-spinners/BounceLoader'
import { LoadingContext } from '../../context/loading-context'
import './Loader.css'

const Loader = () => {
    const loading = useContext(LoadingContext)

    return (
        <div className='loading'>
          <BounceLoader
            color='#226b80'
            loading={loading.loading}
          />
        </div>
    )
}

export default Loader