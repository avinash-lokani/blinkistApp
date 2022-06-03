import React from 'react'
import BookDetail from '../../Components/Organisms/BookDetails/Index';
import Footer from '../../Components/Organisms/Footer/Index';
import Header from '../../Components/Organisms/Header/Index';
import BookDetailView from '../../Components/Templates/BookDetailView/Index';

const BookDetailViewPage = () => {
    return (
        <BookDetailView
         bookDetailOrg={<BookDetail/>} 
         header={<Header/>} 
         footer={<Footer/>}
         />
    )
}

export default BookDetailViewPage;