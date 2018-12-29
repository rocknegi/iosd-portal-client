import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import { connect } from 'react-redux';
import { Row, Col } from 'antd'
import { fetchLibraryBooks, startDeleteLibraryBook } from '../../../actions/libraryActions';
import { polyfill } from 'react-lifecycles-compat';
class BookView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numPages: null,
            pageNumber: 1,
            books: {},
            id: null
        }

    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { id } = this.props.match.params;
        const { books } = this.props.library;
        console.log("Library", this.props.library.books);
        const { pageNumber, numPages } = this.state;
        let selectedBook = books;
        console.log(selectedBook[0]._id)
        let result = [{
            'author': '',
            'image': ''
        }];
        for (let i = 0; i < 5; i++) {
            if (selectedBook[i]._id == id) {
                result.image = selectedBook[i].image;
                result.author = selectedBook[i].author;
                result.name = selectedBook[i].name;
                break;
            }
        }
        console.log(result.image)

        return (<div>
            <Row>
                <Col span={10}>
                    <div className="item-preview">
                        <div className="book" style={
                            {
                                background: `url('${result.image}')`,



                            }}>

                        </div>
                    </div>
                    <h1>{result.name}</h1><span className="subtitle">{result.author}</span>
                </Col>
                <Col span={12}>
                    <Document className="col-md-5"

                        file="https://iosd-uploads.s3.amazonaws.com/94a58230-8f3a-11e8-806e-4d73d79d89a1.pdf"
                        onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} />
                    </Document>

                </Col>
            </Row>
        </div>











        );
    }
}

const mapStateToProps = ({ library, auth }) => {
    return ({
        library,
        isAdmin: auth.isAdmin
    });
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLibraryBooks: () => dispatch(fetchLibraryBooks()),
        startDeleteLibraryBook: (id) => dispatch(startDeleteLibraryBook(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookView);
