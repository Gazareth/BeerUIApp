import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';

import Pagination from 'react-bootstrap/Pagination';

import ProductCard from './productCard';
import {useHttp} from './../hooks/http';

export const ProductList = () => {
    const maxPages = 5;
    const perPage = 15;
    const [page, setPage] = useState(1);
    const [isLoading, data] = useHttp('https://api.punkapi.com/v2/beers?page='+page+'&per_page='+perPage
    , [page]);

    const loadingPlaceholder = {name: "Loading...", id: "0", ingredients: {}, volume: {volume: "", unit: ""}};
    const products = isLoading ? [loadingPlaceholder] : data;

    return (
        <div>
            <Row>
                {products.map((productInfo)=> <ProductCard key={productInfo.id} productInfo={productInfo} />
            )}
            </Row>
            <Nav className="justify-content-center">
                <Pagination >
                    <Pagination.Prev onClick={()=>setPage(page-1)} />
                    {Array.from(Array(maxPages).keys()).map((pageId)=><Pagination.Item active={pageId+1 == page} disabled={isLoading} onClick={()=>setPage(pageId+1)}>{pageId+1}</Pagination.Item>)}
                    <Pagination.Next onClick={()=>setPage(page+1)}/>
                </Pagination>
            </Nav>
        </div>
    );
}

export default ProductList;
