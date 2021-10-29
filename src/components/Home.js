import React, { Component } from 'react';
import data from '../Data/data.json';
import '../styles/home.css';
import bitcoin from '../assets/icons/bitcoin.png'
import ethereum from '../assets/icons/ethereum.png'
import xrp from '../assets/icons/xrp.png'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="row" style={{ margin: "30px" }}>
                    <div className="col-lg-6 col-md-12 header_1">
                        <span className="span_1">Hi John,</span>
                        <span className="span_2">Complete your KYC</span>
                        <span className="">and experience the world class</span>
                        <span className="">bitcoin app defi</span>
                        <span className="span_3">START KYC <i class="material-icons">arrow_forward</i></span>
                    </div>
                    <div className="col-lg-6 col-md-12 header_2">
                        <div className="span_4">Ideal for new investors</div>
                        {data && data.map((item, i) => {
                            var img;
                            if (item.icon === 'Bitcoin') {
                                img = bitcoin;
                            } else if (item.icon === 'Ethereum') {
                                img = ethereum;
                            } else if (item.icon === 'XRP') {
                                img = xrp
                            }
                            var color;
                            if (item.name === 'XRP') {
                                color = "#01ff01"
                            } else {
                                color = "#ff2828"
                            }
                            return <div className="row investors">
                                <div className="col-2">
                                    <img src={img} alt={item.name} width="40px" />
                                </div>
                                <div className="col-5 investors_span">
                                    <span className="child_span">{item.name}</span>
                                    <span className="child_span1">{item.ref}</span>
                                </div>
                                <div className="col-5 investors_span">
                                    <span className="child_span">{item.currency}</span>
                                    <span className="child_span1" style={{ color: color }}>{item.per}</span>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <div className="row" style={{ margin: "30px" }}>
                    <div className="col-lg-6 col-md-12 header_2">
                        <div className="span_4">Trending Coins</div>
                        {data && data.map((item, i) => {
                            var img;
                            if (item.icon === 'Bitcoin') {
                                img = bitcoin;
                            } else if (item.icon === 'Ethereum') {
                                img = ethereum;
                            } else if (item.icon === 'XRP') {
                                img = xrp
                            }
                            var color;
                            if (item.name === 'XRP') {
                                color = "#01ff01"
                            } else {
                                color = "#ff2828"
                            }
                            return <div className="row investors">
                                <div className="col-2">
                                    <img src={img} alt={item.name} width="40px" />
                                </div>
                                <div className="col-5 investors_span">
                                    <span className="child_span">{item.name}</span>
                                    <span className="child_span1">{item.ref}</span>
                                </div>
                                <div className="col-5 investors_span">
                                    <span className="child_span">{item.currency}</span>
                                    <span className="child_span1" style={{ color: color }}>{item.per}</span>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className="col-lg-6 col-md-12 header_2">
                        <div className="span_4">Non Trending Coins</div>
                        {data && data.map((item, i) => {
                            var img;
                            if (item.icon === 'Bitcoin') {
                                img = bitcoin;
                            } else if (item.icon === 'Ethereum') {
                                img = ethereum;
                            } else if (item.icon === 'XRP') {
                                img = xrp
                            }
                            var color;
                            if (item.name === 'XRP') {
                                color = "#01ff01"
                            } else {
                                color = "#ff2828"
                            }
                            return <div className="row investors">
                                <div className="col-2">
                                    <img src={img} alt={item.name} width="40px" />
                                </div>
                                <div className="col-5 investors_span">
                                    <span className="child_span">{item.name}</span>
                                    <span className="child_span1">{item.ref}</span>
                                </div>
                                <div className="col-5 investors_span">
                                    <span className="child_span">{item.currency}</span>
                                    <span className="child_span1" style={{ color: color }}>{item.per}</span>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
