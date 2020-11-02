import React, {useState} from 'react'
import optimized from '../../img/optimized.png'

const ServiceCards = () => {
    const [flipright, setFlipright] = useState(true)

    const cardInfo = [
        {img: optimized, position: 'left', title: 'Extremely Fast & Optimized Websites', description: 'A fast website is extremely important for your business, you don\'t want a customer to leave your website half way through it loading, you\ve just lost a potential customer! Now imagine this with thousands of visitors to your site per day, that is a major loss of income just because someone is too impatient to wait a few more extra seconds for your site to load. Our websites are built using the latest technologies, and premium WordPress themes insuring your website has rapid load speeds meaning you won\'t lose potential customers. If you would like to learn more about why we choose the MERN stack over other tech stacks, check out this article.'},
        {img: optimized, position: 'right', title: 'Extremely Fast & Optimized Websites', description: 'A fast website is extremely important for your business, you don\'t want a customer to leave your website half way through it loading, you\ve just lost a potential customer! Now imagine this with thousands of visitors to your site per day, that is a major loss of income just because someone is too impatient to wait a few more extra seconds for your site to load. Our websites are built using the latest technologies, and premium WordPress themes insuring your website has rapid load speeds meaning you won\'t lose potential customers. If you would like to learn more about why we choose the MERN stack over other tech stacks, check out this article.'},
        {img: optimized, position: 'left', title: 'Extremely Fast & Optimized Websites', description: 'A fast website is extremely important for your business, you don\'t want a customer to leave your website half way through it loading, you\ve just lost a potential customer! Now imagine this with thousands of visitors to your site per day, that is a major loss of income just because someone is too impatient to wait a few more extra seconds for your site to load. Our websites are built using the latest technologies, and premium WordPress themes insuring your website has rapid load speeds meaning you won\'t lose potential customers. If you would like to learn more about why we choose the MERN stack over other tech stacks, check out this article.'},
        {img: optimized, position: ``, title: 'Extremely Fast & Optimized Websites', description: 'A fast website is extremely important for your business, you don\'t want a customer to leave your website half way through it loading, you\ve just lost a potential customer! Now imagine this with thousands of visitors to your site per day, that is a major loss of income just because someone is too impatient to wait a few more extra seconds for your site to load. Our websites are built using the latest technologies, and premium WordPress themes insuring your website has rapid load speeds meaning you won\'t lose potential customers. If you would like to learn more about why we choose the MERN stack over other tech stacks, check out this article.'}
    ]

    const renderCardinfo = (card, index) => {
        return (
            <div key={index} className="shadow-xl w-full p-6">
                {
                    flipright 
                    ?
                    <div className="flex">
                        <div className="flex justify-center">
                            <img src={card.img} className={`${card.position}`} alt="service img" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold">{card.title}</h1>
                            <p>{card.description}</p>
                        </div>
                    </div>
                    :
                    <div className="flex">
                        <div className="flex justify-center">
                            <img src={card.img} className={`${card.position}`} alt="service img" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold">{card.title}</h1>
                            <p>{card.description}</p>
                        </div>
                    </div>
                }
            </div>
        )
    }
    return (
        <div>
           
            {cardInfo.map(renderCardinfo, () => {})}
        </div>
    )
}

export default ServiceCards
