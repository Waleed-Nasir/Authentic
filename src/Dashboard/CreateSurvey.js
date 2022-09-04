import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Table, Tabs, Tab, Button, Form } from 'react-bootstrap';

import Aux from "../hoc/_Aux";
import { toast } from 'react-toastify';

const CreateSurvey = () => {

    let TOKEN = localStorage.getItem('token')
    let userDetails = localStorage.getItem('userDetails')
    userDetails = JSON.parse(userDetails)
    const [isLoading, setisLoading] = React.useState(false);
    const [SurveyList, setSurveyList] = useState([])
    const [OldSurveyList, setOldSurveyList] = useState([])
    useEffect(() => {
        GETSurvey()
    }, [])

    const GETSurvey = (type) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${TOKEN}`);
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://api.authentic-influencers.com/api/get_creator_survey_influencer/f545cf3f-b9a8-4b9b-92d6-d2755d65a451", requestOptions)
            .then(response => response.text())
            .then(result => {
                const { response } = JSON.parse(result)
                let NewSurvey = []
                let OldSurvey = []
                const value = response.detail.map((item) => {
                    if (!item.survey_answer) {
                        NewSurvey.push(item)
                    } else {
                        OldSurvey.push(item)
                    }
                })
                setSurveyList(response.detail)
                setOldSurveyList(OldSurvey)
            })
            .catch(error => console.log('error', error));


    }


    const PostSurvey = (creator_survey_id, answer) => {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${TOKEN}`);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            influencer_id: userDetails.influencer_id,
            creator_survey_id,
            answer
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://api.authentic-influencers.com/api/creator_survey_answer", requestOptions)
            .then(response => response.text())
            .then(result => {
                const { response } = JSON.parse(result)
                toast(response.message)
                GETSurvey()
            })
            .catch(error => console.log('error', error));

    }


    return (
        <Aux>
            <Row className='pt-4 pr-2 pl-2 pb-4 d-flex justify-content-between' >
                <h5>Creators Survey</h5>
            </Row>
            <Row className=' p-4   d-flex justify-content-between bg-white' >
                <h5>New Survey</h5>
            </Row>
            <Row className='bg-white pt-0 rounded' >
                {SurveyList.map((item) => <Col md={4} xl={4} >
                    <Card className='p-4 rounded'  >
                        <span className='f-w-600 f-14 text-dark pb-5'>{item.question}</span>
                        <Form.Group>
                            {Object.keys(item).map((name, index) => {
                                if (name.includes('answer_')) {
                                    return <>
                                        <div class="media align-item-center justify-contennt-between pt-0 pb-0 mb-0">
                                            <div class="media-body f-w-800 f-12">
                                                {item[name]}
                                            </div>
                                            <Form.Check
                                                custom
                                                // label="Or toggle this other custom radio"
                                                type="radio"
                                                name={item.id}
                                                id={item.id + '_' + index}
                                                onClick={() => PostSurvey(item.creator_survey_id, item[name])}
                                            />
                                        </div>
                                        <hr />
                                    </>

                                }
                            })}
                        </Form.Group>
                    </Card>
                </Col>)}

            </Row >
            {OldSurveyList.length ? <>
                <Row className=' p-4 mt-5  d-flex justify-content-between bg-white' >
                    <h5>Submitted Survey</h5>
                </Row>
                <Row className='bg-white pt-0 orunded' >
                    {OldSurveyList.map((item) => <Col md={4} xl={4} >
                        <Card className='p-4 rounded' style={{ backgroundColor: '#eeeeee' }}  >
                            <span className='f-w-600 f-14 text-dark pb-5'>{item.question}</span>
                            <Form.Group>
                                {Object.keys(item).map((name, index) => {
                                    if (name.includes('answer_')) {
                                        return <>
                                            <div class="media align-item-center justify-contennt-between pt-0 pb-0 mb-0">
                                                <div class="media-body f-w-800 f-12">
                                                    {item[name]}
                                                </div>
                                                <Form.Check
                                                    custom
                                                    // label="Or toggle this other custom radio"
                                                    type="radio"
                                                    name={item.id}
                                                    value={item?.survey_answer}
                                                    id={item.id + '_' + index}
                                                    onClick={() => PostSurvey(item.creator_survey_id, item[name])}
                                                    disabled
                                                />
                                            </div>
                                            <hr />
                                        </>

                                    }
                                })}
                            </Form.Group>
                        </Card>
                    </Col>)}
                </Row >
            </> : null}
        </Aux >
    );
}

export default CreateSurvey;