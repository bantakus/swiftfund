import React from 'react';

export default function CoinItem (props) {
    return (
        <div className={'flex items-center justify-between gap-8 my-5 bg-white rounded rounded-lg p-5 border border-[#525252] '} >
            <p>{props.coins.market_cap_rank}</p>
            <div className="img-symbol">
                <img src={props.coins.image} />
                <p>{props.coins.symbol.toUpperCase()}</p>
            </div>
            <p>${props.coins.current_price.toLocaleString()}</p>
            {props.coins.price_change_percentage_24h < 0 ? (
                <p className='red'>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
            ) : (
                <p className='green'>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
            )}
            <p className='hide-mobile'>{props.coins.total_volume.toLocaleString()}</p>
            <p className='hide-mobile'>{props.coins.market_cap.toLocaleString()}</p>
        </div>
    )
}
