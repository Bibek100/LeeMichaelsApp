import React, { useState, useEffect } from 'react';
import IndividualItem from './IndividualItem';
import Order from './Order';
import { Card, Image, Segment, Grid, Header } from 'semantic-ui-react';

const Items = (props) => {
    const Neklace = [{
        id: 1,
        size: false,
        Name: 'Circle Monogram Necklace',
        Material1: '14k Yellow Gold',
        Material2: 'Sterling Silver',
        Size1: '',
        Size2: '',
        Size3: '',
    }, {
        id: 2,
        size: false,
        Name: 'Script Monogram Pendant',
        Material1: 'Sterling Silver',
        Material2: 'Yellow Gold Plated',
        Size1: '',
        Size2: '',
        Size3: '',

    }, {
        id: 3,
        size: true,
        Name: 'Script Name Necklace',
        Material1: 'Sterling Silver',
        Material2: '14k Yellow Gold',
        Size1: '1 Name',
        Size2: '2 Name',
        Size3: '3 Name',
    }];


    return (
        <>
        <Segment clearing>
            <Header textAlign='center' size='huge' as='h2'>
                Lee Michaels
            </Header>
            <div style={{ padding: '10%', marginLeft:'8%' }}>

                <Grid columns={3}>
                    <Grid.Column width={5}>
                        <Card>
                            <Image src='https://www.lmfj.com//media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/d/n/dn99a8320.jpg' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header><a onClick={() => props.history.push({ pathname: "Order/1", neklace: Neklace[0], image: 'https://www.lmfj.com//media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/d/n/dn99a8320.jpg' })}>Circle Monogram Necklace</a></Card.Header>

                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Card>
                            <Image src='https://www.lmfj.com//media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/d/n/dn99a7790.jpg' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header><a onClick={() => props.history.push({ pathname: "Order/2", neklace: Neklace[1], image: 'https://www.lmfj.com//media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/d/n/dn99a7790.jpg' })}>Script Monogram Pendant</a></Card.Header>

                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Card>
                            <Image src='https://www.lmfj.com//media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/D/N/DN99A7782.jpg' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header><a onClick={() => props.history.push({ pathname: "Order/3", neklace: Neklace[2], image: 'https://www.lmfj.com//media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/D/N/DN99A7782.jpg' })}>Script Name Necklace</a></Card.Header>

                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid>
            </div>
        </Segment>
        </>
    )
}
export default Items;