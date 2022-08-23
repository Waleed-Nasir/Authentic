
import React from 'react'
import { Button } from 'react-bootstrap'

const C_Card = () => {
    return (
        <div class="card mb-10 overlay-hidden " style={{borderRadius:20,marginBottom:50}}>
            <div class="bg-image hover-overlay rippleoverflow-hidden " data-mdb-ripple-color="light">
                <img style={{borderRadius:'20px 20px 0px 0px'}} class="img-fluid" src="https://www.creatisimo.net/wp-content/uploads/2021/11/coming-soon-pages-cover.jpg"
                    alt="Card image cap" />
                <h6 style={{ position: 'absolute', zIndex: 100, color: 'white', bottom: 63, width: '100%', background: '#00000060', height: 40, padding: 9 }}>Paid</h6>
            </div>
            <div class="card-body pt-3">
                <div class="d-flex justify-content-between">
                    <div className='d-flex row'>
                        <h6>Interested</h6>
                        <i class="fa fa-heart text-muted ml-2 "
                            title="I like it"></i>
                    </div>
                    <div className='d-flex row'>
                        <h6 className="text-muted bold  f-12 ">Not Interested</h6>
                        <i class="fa fa-times-circle  ml-2 " title="I like it"></i>
                    </div>

                </div>
                <Button type='submit' variant="primary" style={{ position: 'absolute', zIndex: 100, color: 'white', bottom: -25,width:200,left:'25%' }}>
                    Submit
                </Button>
            </div>

        </div>

    )
}

export default C_Card
