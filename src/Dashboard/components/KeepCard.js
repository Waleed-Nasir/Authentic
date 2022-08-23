import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';

const KeepCard = ({ onClick, data = [],type='' }) => {
    return (

        <Col md={6} xl={6} >
            <Card style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', padding: 20 }}>
                <img src="https://www.creatisimo.net/wp-content/uploads/2021/11/coming-soon-pages-cover.jpg" class="img-thumbnail mr-3" alt="Cinque Terre" style={{ maxWidth: 200, minHeight: 200 }} />
                <div className="w-100">
                    <div className=" d-flex justify-content-between">
                        <div className='text-left'>
                            <span className='f-18 f-w-900 text-dark'>{type} </span>
                            <br></br>
                            <span className='f-10 m-t-6' >{type}.com</span>
                        </div>
                        <i class="bg-l-pink fa fa-pencil text-c-green f-12 p-1 rounded ml-2  text-center" onClick={onClick} style={{ width: 24, height: 24, cursor: 'pointer' }} title="I like it"></i>
                    </div>

                    {data.map((item, index, Total) => {
                        if(item.field !== 'Profile Picture')
                        return (
                            <>
                                <div className=" d-flex justify-content-between mt-2 mb-2">
                                    <span className='f-12 m-t-6 f-w-800' >{item.field}</span>
                                    <span className='f-12 m-t-6 f-w-900' >{item.keep_on_track_info.value}</span>
                                </div>
                                {index-1 !== Total.length ? (<div class="border-top"></div>) : null}
                            </>
                        )
                    })
                    }


                </div>
            </Card>
        </Col>
    );
}

export default KeepCard;