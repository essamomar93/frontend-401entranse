import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '././MyFavorites.js';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import UpdateForm from './UpdateForm.js';



class MyFavorites extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favoretApi: [],
      show: false
    }
  }
  handelShow = (item) => {
    this.setState({
      show: true,
      id: item._id
    })
  }
  handelClose = () => {
    this.setState({
      show: false
    })
  }
  componentDidMount = async () => {
    await axios.get(`${process.env.REACT_APP_SERVER}/getLang`).then(res => {
      this.setState({
        favoretApi: res.data
      })
    })
  }
  handelDelete = async (id) => {
    await axios.delete(`${process.env.REACT_APP_SERVER}/deleteLang/${id}`).then(res => {
      this.setState({
        favoretApi: res.data
      })
    })
  }
  handelUpdate = async (e) => {
    const reqBody = {
      title:e.target.title.value,
      imageUrl: e.target.imageUrl.value
    }
    await axios.put(`${process.env.REACT_APP_SERVER}/ubdateLang/${this.state.id}`,reqBody).then(res => {
      this.setState({
        favoretApi: res.data
      })
    })
  }

  render() {
    return (
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>
        {
          this.state.favoretApi.map(item => {
            return (
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Button variant="primary" onClick={() => { this.handelDelete(item._id) }} >Delete</Button>
                  <Button variant="primary" onClick={() => { this.handelShow(item) }} >Update</Button>
                </Card.Body>
              </Card>
            )

          })
        }
        {
          <UpdateForm
          handelUpdate={this.handelUpdate}
          show={this.state.show}
          handelClose={this.handelClose}
          />
        }
      </>
    )
  }
}

export default withAuth0(MyFavorites);

