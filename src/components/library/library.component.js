import React, {Component} from 'react';
import {Row, Col, Modal} from 'antd' ;
import books from './books' ;

class LibraryComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            book: {}
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleClick(book) {
        console.log(book);
        this.setState({
            visible: true,
            book: book
        })
    }

    handleCancel() {
        this.setState({
            visible: false
        })
    }

    render() {

        let selectedBook = this.state.book;
        return (
            <div>
                <Row className='container'>
                    {
                        books.map(item => {
                            return (
                                <Col span={4} className='book-card' onClick={() => {
                                    this.handleClick(item);
                                }}>
                                    <div className="cover">
                                        <img className='img-responsive' src={item.cover} alt=""/>
                                    </div>
                                </Col>

                            )


                        })
                    }

                </Row>
                <Modal
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={null}
                    width={'1000 shitty pixels'}
                    style={{
                        display: 'table'
                    }}
                >

                    <article className="item-pane">
                        <div className="item-preview">
                            <div className="book" style={{background: `url('${selectedBook.cover}')`}} data-color={selectedBook.color}>

                            </div>
                        </div>
                        <div className="item-details">
                            <h1>{selectedBook.title}</h1><span className="subtitle">{selectedBook.author}</span>
                            <div className="pane__section">
                                <p>
                                    {selectedBook.abstract}
                                </p>
                            </div>
                            <div className="pane__section clearfix">

                                <a className="button buy-button"
                                   href={selectedBook.link} target='_blank'>
                                    Download
                                </a>
                            </div>
                        </div>
                    </article>


                </Modal>
            </div>
        );
    }
}

export default LibraryComponent;
