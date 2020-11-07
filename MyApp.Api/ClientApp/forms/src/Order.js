import React, { useState, useEffect } from 'react';
import { Dropdown, Card, Image, Grid, Button, Segment, Form, ModalDescription } from 'semantic-ui-react';
import { Alert } from './Helper/Alert';
import {saveItem} from './_services/itemService';

const Order = (props) => {
    // const { neklace } = props.location;
    // const { image } = props.location;
    const [item, setItem] =  useState({Id:0,Material:'',Size:'',User_FullName:'',InitialFirst:'', InitialSecond:'', InitialThird:''});
    const[id,setId]= useState(0);

    const Neklace = [{
        id:0,
        size:false,
        Name:'Circle Monogram Necklace',
        Material1:'14k Yellow Gold',
        Material2:'Sterling Silver',
        Size1:'',
        Size2:'',
        Size3:'',
        image:'https://www.lmfj.com//media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/d/n/dn99a8320.jpg'
    },{
        id:2,
        size:false,
        Name:'Script Monogram Pendant',
        Material1:'Sterling Silver',
        Material2:'Yellow Gold Plated',
        Size1:'',
        Size2:'',
        Size3:'',
        image:'https://www.lmfj.com//media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/d/n/dn99a7790.jpg'
      
    },{
        id:3,
        size:true,
        Name:'Script Name Necklace',
        Material1:'Sterling Silver',
        Material2:'14k Yellow Gold',
        Size1:'1 Name',
        Size2:'2 Name',
        Size3:'3 Name',
        image:'https://www.lmfj.com//media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/D/N/DN99A7782.jpg'
    }];
    

    useEffect(()=>{
        setId(props.location.pathname.split('/')[2] -1);
        setItem({id:0,Material:'',Size:'',User_FullName:'',InitialFirst:'', InitialSecond:'', InitialThird:''})
    },[])
    const material = [
        { key: '1', value: Neklace[id].Material1, text: Neklace[id].Material1 },
        { key: 'B', value: Neklace[id].Material2, text: Neklace[id].Material2 }
    ]
    const Sizes = [
        { key: '1', value:  Neklace[id].Size1, text:  Neklace[id].Size1 },
        { key: '2', value:  Neklace[id].Size2, text:  Neklace[id].Size2 },
        { key: '3', value:  Neklace[id].Size3, text:  Neklace[id].Size3 }
    ]

    const characters = [
        { key: 'A', value: 'A', text: 'A' },
        { key: 'B', value: 'B', text: 'B' },
        { key: 'C', value: 'C', text: 'C' },
        { key: 'D', value: 'D', text: 'D' },
        { key: 'E', value: 'E', text: 'E' },
        { key: 'F', value: 'F', text: 'F' },
        { key: 'G', value: 'G', text: 'G' },
        { key: 'H', value: 'H', text: 'H' },
        { key: 'I', value: 'I', text: 'I' },
        { key: 'J', value: 'J', text: 'J' },
        { key: 'K', value: 'K', text: 'K' },
        { key: 'L', value: 'L', text: 'L' },
        { key: 'M', value: 'M', text: 'M' },
        { key: 'N', value: 'N', text: 'N' },
        { key: 'O', value: 'O', text: 'O' },
        { key: 'P', value: 'P', text: 'P' },
        { key: 'Q', value: 'Q', text: 'Q' },
        { key: 'R', value: 'R', text: 'R' },
        { key: 'S', value: 'S', text: 'S' },
        { key: 'T', value: 'T', text: 'T' },
        { key: 'U', value: 'U', text: 'U' },
        { key: 'V', value: 'V', text: 'V' },
        { key: 'W', value: 'W', text: 'W' },
        { key: 'X', value: 'X', text: 'X' },
        { key: 'Y', value: 'Y', text: 'Y' },
        { key: 'Z', value: 'Z', text: 'Z' }
    ];
const handleChange=(e,{value})=>{
    console.log(e,value);
}
const handleSubmit = () => {
    saveItem(item).then((res)=>{
       setItem({id:0,Material:'',Size:'',User_FullName:'',InitialFirst:'', InitialSecond:'', InitialThird:''});
       Alert(res);
       window.location.reload(true);
    }).catch(err=>
       console.log(err));
}
    return (
        <>
            <Segment>
                <Grid columns={2} >
                    <Grid.Column width={8}>
                        <Card>
                            <Image style={{width:'70%'}} src={Neklace[id].image} wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>{ Neklace[id].Name}</Card.Header>
                                <Card.Description></Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
      
                    <Grid.Column width={8}>

                        <Form onSubmit={handleSubmit} size='large'>
                        <label>Select Initial</label>
                       
                                 <Form.Group widths='equal' >
                                <Form.Dropdown fluid search selection placeholder='First Name Initial' defaultValue={item.InitialFirst} options={characters} onChange={(e,{value})=> setItem({...item,InitialFirst:value})} />
                                </Form.Group>
                                <Form.Group widths='equal' >
                                <Form.Dropdown fluid search selection placeholder='Middle Name Initial' options={characters} defaultValue={item.InitialSecond} onChange={(e,{value})=> setItem({...item,InitialSecond:value})}/>
                                </Form.Group>
                                <Form.Group widths='equal' >
                                <Form.Dropdown fluid search selection placeholder='Last Name Initial' options={characters} defaultValue={item.InitialThird} onChange={(e,{value})=> setItem({...item,InitialThird:value})}/>
                            </Form.Group>
                            <label>Select Material</label>
                            <Form.Group widths='equal'>
                                <Form.Dropdown fluid search selection placeholder='Material' search selection options={material} defaultValue={item.Material} onChange={(e,{value})=> setItem({...item,Material:value})}/>
                            </Form.Group>
                            
                            { Neklace[id].size? <>
                                <label>Select Size</label>
                            <Form.Group widths='equal'>
                                <Form.Dropdown fluid search selection placeholder='Size' search selection options={Sizes} defaultValue={item.Size} onChange={handleChange} onChange={(e,{value})=> setItem({...item,Size:value})}/>
                            </Form.Group>
                           
                            </> : ''}
                            <Form.Group widths='equal'>
                                <Form.Input label='Enter your Full Name' defaultValue={item.User_FullName} onChange={(e,{value})=> setItem({...item,User_FullName:value})}/>
                            </Form.Group>
                                {console.log('hereeee',item)}
                            <Form.Button >Submit</Form.Button>
                            </Form>
                    </Grid.Column>
                </Grid>
                
            </Segment>
   
        </>

    )
}
export default Order;