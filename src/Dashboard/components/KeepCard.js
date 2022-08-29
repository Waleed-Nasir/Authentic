import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';

const KeepCard = ({ onClick, data = [], type = '', images = [], onClickUpload }) => {
    return (
        <Col md={6} xl={6} >
            <Card style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', padding: 20 }}>
                <div className="w-100">
                    <div className=" d-flex justify-content-between">
                        <div className='text-left'>
                            <span className='f-18 f-w-900 text-dark'>{type} </span>
                            <br></br>
                            {data?.map((item) => {
                                if (item.field.includes('Profile Link')) {
                                 return   <a href={item.keep_on_track_info.value} target="_blank" className='f-10 m-t-6' >{item.keep_on_track_info.value}</a>
                                }
                            })}


                        </div>
                        <div>
                            <i class="bg-l-pink fa fa-upload text-c-green f-12 p-1 rounded ml-2  text-center" onClick={onClickUpload} style={{ width: 24, height: 24, cursor: 'pointer' }} title="I like it"></i>
                            <i class="bg-l-pink fa fa-pencil text-c-green f-12 p-1 rounded ml-2  text-center" onClick={onClick} style={{ width: 24, height: 24, cursor: 'pointer' }} title="I like it"></i>
                        </div>
                    </div>

                    {data.map((item, index, Total) => {
                        if (!item.field.includes('Profile Link'))
                            return (
                                <>
                                    <div className=" d-flex justify-content-between mt-2 mb-2">
                                        <span className='f-12 m-t-6 f-w-800' >{item.field}</span>
                                        <span className='f-12 m-t-6 f-w-900' style={{ width: '100px', wordWrap: 'break-word' }}>{item.keep_on_track_info.value}</span>
                                    </div>
                                    {index - 1 !== Total.length ? (<div class="border-top"></div>) : null}
                                </>
                            )
                    })
                    }
                    <div style={{ width: '100%', flexDirection: 'row', overflowY: 'scroll', display: 'flex', marginTop: 20 }}>
                        {images.map((item) => <img src={item.image} class="img-thumbnail mr-3" alt="Cinque Terre" style={{ width: 100, height: 100, objectFit: 'cover', }} />)}
                    </div>

                </div>

            </Card>
        </Col>
    );
}

export default KeepCard;