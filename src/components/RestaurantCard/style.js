import styled from 'styled-components'

export const RestaurantContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin: 120px 16px 0px 16px;
`

export const RestaurantCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 328px;
    height: 188px;
    margin-bottom: 8px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
`

export const RestaurantImage = styled.img`
    width: 100%;
    height: 120px;
    object-fit: fill;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`