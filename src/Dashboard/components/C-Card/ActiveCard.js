
import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

const ActiveCard = ({isNew=false}) => {
    const history = useHistory();

                  
    return (
        <div class="card mb-10 overlay-hidden " style={{ borderRadius: 20, marginBottom: 50, overflow: 'hidden',cursor:'pointer' }} onClick={()=>  history.push('/CampaignView')} >
            <div class="bg-image hover-overlay rippleoverflow-hidden  " data-mdb-ripple-color="light">
                <img style={{ borderRadius: '20px 20px 20px 20px' }} class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
                    alt="Card image cap" />
                {isNew ? <div style={{ position: 'absolute', zIndex: 100, color: 'white', top: 10, left: 10, background: '#f4891e', padding: '2px 5px', borderRadius: 4, fontSize: 10 }}>
                    Request
                </div> : null}
                {isNew ? <div style={{ position: 'absolute', zIndex: 100, color: 'white', bottom: -0, width: '100%', background: '#00000060', height: 40, padding: 10, width: '100%', flexDirection: 'row', display: 'flex' }}>
                    <h6 className='d-flex w-100 text-white'>Interested</h6>
                    <div class="d-flex justify-content-between w-10">
                        <i class="bg-danger fa fa-times text-white f-12 p-1 rounded ml-2 "
                            title="I like it"></i>
                        <i class="bg-success fa fa-check  text-white f-12 p-1 rounded ml-2" title="I like it"></i>
                    </div>
                </div> : null}
            </div>

        </div>

    )
}

export default ActiveCard
