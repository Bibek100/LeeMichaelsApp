import React, { useState, useEffect, Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import NavBar from './Navbar';

export const NestedRoute = ({component:Component, ...rest})=>{
    return(
        <Route {...rest} render={props=>{
            console.log(props);
        return(
            <>
             <NavBar />
            <Component {...props}/>
            </>
           
        )
        }}/>
    )
}