import React, { useEffect, useReducer } from 'react'
import axios from 'axios';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Pagination from 'react-bootstrap/Pagination'
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form'
import { FaSearch, FaArrowUp, FaArrowDown, FaArrowRight } from 'react-icons/fa';
import Product from './Product'
import PreLoader from './PreLoader';
import ErrorMessage from '../Screens/ErrorMessage';
import { getError } from '../../utils';


const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true }; //for the loading box.
        case 'FETCH_SUCCESS':
            return { ...state, products: action.payload, loading: false }; // for the data that is coming from the action
        case 'FETCH_FAIL':
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}

function BuyItems() {
    const [{ loading, products, error }, dispatch] = useReducer(logger(reducer), {
        loading: true, products: [], error: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' })
            try {
                const result = await axios.get('/api/products/buy');
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
            } catch (error) {
                dispatch({ type: 'FETCH_FAIL', payload: getError(error) })
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <div style={{ marginLeft: '3%', marginTop: '2%', maxWidth: '1250px' }}>
                <Row>
                    <Col style={{ marginLeft: '2%', marginTop: '1%' }}>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant='transparent'> <FaSearch /></Button>
                        </Form>
                    </Col>
                    <Col style={{ marginLeft: '2%', marginTop: '1%' }}>
                        <Dropdown style={{ marginTop: '1%' }}>
                            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="transparent">
                                Filter by Categories
                            </Dropdown.Toggle>

                            <Dropdown.Menu variant="dark">
                                <Dropdown.Item href="#/action-1">
                                    Action / Adventure
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-2">Driving / Racing</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-3">Sports</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-4">Horror</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col style={{ marginLeft: '2%', marginTop: '1%' }}>
                        <Dropdown style={{ marginTop: '1%' }}>
                            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="transparent">
                                Sort by Rating
                            </Dropdown.Toggle>

                            <Dropdown.Menu variant="dark">
                                <Dropdown.Item href="#/action-1">
                                    High to Low <FaArrowUp />
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-2">Low to High <FaArrowDown /></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col style={{ marginLeft: '2%', marginTop: '1%' }}>
                        <Dropdown style={{ marginTop: '1%' }}>
                            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="transparent">
                                Sort by:
                            </Dropdown.Toggle>

                            <Dropdown.Menu variant="dark">
                                <Dropdown.Item href="#/action-1">
                                    Price High to Low <FaArrowUp />
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-2">Price Low to High <FaArrowDown /></Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-2">A <FaArrowRight /> Z </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-2">Z <FaArrowRight /> A </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </div>

            <Row style={{ margin: 30, paddingBottom: 50 }}>
                {
                    loading ? (
                        <PreLoader />
                    ) :
                        error ? (
                            <ErrorMessage> {error} </ErrorMessage>
                        ) : (
                            products.map((product) => (
                                <Col xs={6} sm={6} md={6} lg={3}>
                                    <Product product={product} />
                                </Col>
                            ))
                        )}
            </Row>

            <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 50 }}>
                <Pagination>
                    <Pagination.First disabled />
                    <Pagination.Prev />
                    <Pagination.Item style={{ backgroundColor: 'green' }} active>{1}</Pagination.Item>
                    <Pagination.Item >{2}</Pagination.Item>
                    <Pagination.Item >{3}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </div>
        </div>

    )
}

export default BuyItems