import * as React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
export default function LoaderBackdrop({ open }) {
    return (
        <div>
            <Backdrop
                style={{position:'absolute',zIndex:1000000}}
                sx={{ color: 'red', zIndex: 1000000 }}
                open={open}
            >
                <CircularProgress style={{color:'#ee2f82'}}/>
            </Backdrop>
        </div>
    );
}