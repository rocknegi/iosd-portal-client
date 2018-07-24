import React, {Component} from 'react';
import {Row, Col, Modal, Button} from 'antd' ;
import books from './books' ;
import {Link} from 'react-router-dom' ;
import {connect} from 'react-redux';
import {fetchLibraryBooks} from '../../actions/libraryActions';

class LibraryComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            book: {}
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentWillMount() {
        this.props.fetchLibraryBooks().then(res => {
            console.log("Books Fetched");
        }).catch(err => {
            console.error(err);
        });
    }

    handleClick(book) {
        console.log(book);
        this.setState({
            visible: true,
            book: book
        });
    }

    handleCancel() {
        this.setState({
            visible: false
        });
    }

    render() {

        let selectedBook = this.state.book;
        console.log(this.props.library);
        return (
            <div>
                <Row className='container'>
                    {
                        // this.props.library.books.map(item => {
                        this.props.library.books.map(item => {
                            return (
                                <Col id={item._id} span={4} className='book-card' onClick={() => {
                                    this.handleClick(item);
                                }}>
                                    <div className="cover">
                                        <img className='img-responsive' src={item.image} alt=""/>
                                    </div>
                                </Col>

                            );


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
                    wrapClassName="vertical-center-modal"
                >

                    <article className="item-pane">
                        <div className="item-preview">
                            <div className="book" style={
                                {
                                    background: `url('${selectedBook.image}')`,
                                    '--before-bg': `${selectedBook.color}`

                                }} data-color={selectedBook.color}>

                            </div>
                        </div>
                        <div className="item-details">
                            <h1>{selectedBook.name}</h1><span className="subtitle">{selectedBook.author}</span>
                            <div className="pane__section">
                                <p>
                                    {selectedBook.description}
                                </p>
                            </div>
                            <div className="pane__section clearfix">
                                <Link target='-_blank' to={selectedBook.link}>
                                <Button size='large' className='button-solid'>
                                    Download
                                </Button>
                                </Link>
                            </div>
                        </div>
                    </article>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = ({library}) => {
    return ({
        library
    });
};

export default connect(mapStateToProps, {
    fetchLibraryBooks
})(LibraryComponent);
