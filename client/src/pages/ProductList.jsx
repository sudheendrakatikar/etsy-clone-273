import styled from "styled-components";
import { useLocation } from "react-router";
import { useState } from "react";

import Products from '../components/Products'

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("rating");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };

    return (
        <Container>
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Sort by:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="rating">Avg. Customer Rating</Option>
                        <Option value="l2h">Price: Low to High</Option>
                        <Option value="h2l">Price: High to Low</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} sort={sort} />
        </Container>
    );
};

export default ProductList;