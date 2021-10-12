import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';

export class UpdateForm extends Component {
    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.handelClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={(e) => { this.props.handelUpdate(e) }}>
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" defaultValue={this.title} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="imageUrl">
                                <Form.Label>Image Url</Form.Label>
                                <Form.Control type="text" defaultValue={this.imageUrl} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default UpdateForm
