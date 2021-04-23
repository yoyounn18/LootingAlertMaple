import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../index.css'

const StartBtn = ({ onClick, text }) => {
    const useStyles = makeStyles({
        root: {
            background: '#9c27b0',
            border: '4px solid #6d1b7b',
            borderRadius: 5,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 48,
            padding: '0 10px',
            width: '90px',
            margin: '5px',
            fontFamily: 'maple-font',
        },
    });

    const classes = useStyles();

    return (
        <>
            <Button onClick={onClick} className={classes.root} style={{ fontFamily: "메이플스토리 OTF", fontSize: "1rem" }}>{text}</Button>
        </>
    )
}

export default StartBtn
