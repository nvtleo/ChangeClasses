import React, { Component } from 'react'
import css from "./style.module.css"
import { megeClassName } from "../utils/index"

export default class ChangeGlass extends Component {
    mangSP = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]
    state = {
        styleGlass: {
            position: "absolute",
            top: "100px",
            left: "240px",
            width: "165px",
            opacity: "0.5"
        }

    }
    handleGlass = (img) => {
        this.setState({
            styleGlass: {
                position: "absolute",
                top: "100px",
                left: "240px",
                width: "165px",
                opacity: "0.5"
            }
        })
    }
    hienThiSP = () => {
        return this.mangSP.map((glass) => {
            let { url } = glass;
            return <div className="col-2">
                <img className={megeClassName(css.glassFont)} src={url} alt="" />
            </div>
        })
    }
    render() {

        return (
            <div>
                <header><h1>TRY GLASSES APP ONLINE</h1></header>
                <div className="row">
                    <div className="col-6">
                        <img className={megeClassName(css.imageFont, css.possition)} src="./glassesImage/model.jpg" alt="" />
                        <img style={this.state.styleGlass} src="./glassesImage/v1.png" alt="" />

                    </div>
                    <div className="col-6">
                        <img className={css["imageFont"]} src="./glassesImage/model.jpg" alt="" />
                    </div>
                </div>
                <div className={megeClassName("row", css.area)}>
                    <button onClick={() => { this.handleGlass() }} className={css["btnGlass"]}><img className={css["glassFont"]} src="./glassesImage/v1.png" alt="" /></button>
                    <button onClick={() => { this.handleGlass() }} className={css["btnGlass"]}><img className={css["glassFont"]} src="./glassesImage/v2.png" alt="" /></button>
                    <button onClick={() => { this.handleGlass() }} className={css["btnGlass"]}><img className={css["glassFont"]} src="./glassesImage/v3.png" alt="" /></button>
                    <button onClick={() => { this.handleGlass() }} className={css["btnGlass"]}><img className={css["glassFont"]} src="./glassesImage/v4.png" alt="" /></button>
                    <button onClick={() => { this.handleGlass() }} className={css["btnGlass"]}><img className={css["glassFont"]} src="./glassesImage/v5.png" alt="" /></button>
                    <button onClick={() => { this.handleGlass() }} className={css["btnGlass"]}><img className={css["glassFont"]} src="./glassesImage/v6.png" alt="" /></button>
                    <button onClick={() => { this.handleGlass() }} className={css["btnGlass"]}><img className={css["glassFont"]} src="./glassesImage/v7.png" alt="" /></button>
                    <button onClick={() => { this.handleGlass() }} className={css["btnGlass"]}><img className={css["glassFont"]} src="./glassesImage/v8.png" alt="" /></button>
                    <button onClick={() => { this.handleGlass() }} className={css["btnGlass"]}><img className={css["glassFont"]} src="./glassesImage/v9.png" alt="" /></button>


                </div>
            </div>
        )
    }
}
