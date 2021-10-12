import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';


class AllDataAPI extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allApi: []
        }
    };
    componentDidMount = async () => {
        await axios.get(`${process.env.REACT_APP_SERVER}/getApi`).then(res => {
            this.setState({
                allApi: res.data
            })
        })
    }

    addToFavoret = async (item) => {
        const reqBody = {
            title:item.title,
            imageUrl:item.imageUrl
        }
         await axios.post(`${process.env.REACT_APP_SERVER}/createLang`,reqBody)
    }

    render() {
        return (
            <div>
                <h1>All Data from the API</h1>
                {
                    this.state.allApi.map(item => {
                        return (
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.imageUrl} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Button variant="primary" onClick={()=>{this.addToFavoret(item)}} >Add To Favoret</Button>
                                </Card.Body>
                            </Card>
                        )

                    })
                }
                <h3>Select your favorites :)</h3>
            </div >
        )
    }
}



export default withAuth0(AllDataAPI);
