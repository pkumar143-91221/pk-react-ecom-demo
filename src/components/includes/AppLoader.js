import React from 'react';
import { useSelector } from 'react-redux';

const AppLoader = (props) => {
    const isLoading = useSelector((state) => state.loaderStatus)
    return(
        <>
        {isLoading && <div className="loader-container">
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default AppLoader;