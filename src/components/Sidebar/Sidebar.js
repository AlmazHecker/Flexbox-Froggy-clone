import classes from './Sidebar.module.css'
import React from 'react'
import Textarea from './Textarea/Textarea';
import Instructions from './Instructions/Instructions';
import Header from './Header/Header';
import Footer from './Footer/Footer';


export default function Sidebar() {


    return (
        <section className={classes.Sidebar}>

            <Header/>

                <Instructions/>

                <Textarea/>

            <Footer />

        </section>
    )
}

