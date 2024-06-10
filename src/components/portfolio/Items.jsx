import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import shapeTwo from '../../assets/shape-2.png';

const Items = ({projectItems}) => {
  return (
    <>
    {projectItems.map((projectItem)=>{
        const {id, img, category, title, description} = projectItem;
        return (
            <div className="portfolio__items card card-two" key={id}>
                <div className="portfolio__img-wrapper">
                    <img src={img} alt="" className="portfolio__img" />
                </div>
                <span className="portfolio__category text-cs">{category}</span>
                <h3 className="portfolio__title">{title}</h3>
                <p className="portfolio__description">{description}</p>
                <a href="" className="link">
                    See Pricing
                    <FaArrowRight className='link__icon'></FaArrowRight>

                </a>
                <img src={shapeTwo} alt="" className="shape c__shape" />
            </div>
        )
    })}
    </>
  )
}

export default Items