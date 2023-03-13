import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Categories = (props) => {
    const data = props.data;
    const timeOut=props.timeOut || 3000;
    const [activeSlider, setActiveSlider] = useState(0);
    // const nextSlider = () => {
    //     const index = activeSlider + 1 > data.length - 1 ? 0 : activeSlider + 1;
    //     setActiveSlider(index);
    // };
    const nextSlider = useCallback(() => {
        const index = activeSlider + 1 > data.length - 1 ? 0 : activeSlider + 1;
        setActiveSlider(index);
    }, [activeSlider, data]);
    const prevSlider = () => {
        const index =
            activeSlider - 1 <= 0 ? data.length - 1 : activeSlider - 1;
        setActiveSlider(index);
    };

    useEffect(() => {
        if (props.auto) {
            
            const slideAuto = setTimeout(() => {
                nextSlider();
            }, timeOut);
            return () => {
                clearTimeout(slideAuto);
            };
        }
    }, [nextSlider, timeOut]);

    return (
        <div className="cate-slider">
            {data.map((item, index) => {
                return (
                    <RenderItemCate
                        key={index}
                        item={item}
                        active={index === activeSlider}
                    ></RenderItemCate>
                );
            })}
            {props.control ? (
                <div className="cate-slider__control">
                    <div
                        className="cate-slider__control__item"
                        onClick={prevSlider}
                    >
                        <i className="bx bx-chevron-left"></i>
                    </div>
                    <div className="cate-slider__control__item">
                        <div className="index">
                            {activeSlider + 1} / {data.length}
                        </div>
                    </div>
                    <div
                        className="cate-slider__control__item"
                        onClick={nextSlider}
                    >
                        <i className="bx bx-chevron-right"></i>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

Categories.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number
};
const RenderItemCate = (props) => {
    return (
        <div className={`cate-slider__item ${props.active ? 'active' : ''}`}>
            <div className={`cate-slider__item__info `}>
                <div
                    className={`cate-slider__item__info__title color-${props.item.color}`}
                >
                    <span> {props.item.title}</span>
                </div>
                <div className="cate-slider__item__info__desc">
                    <span> {props.item.description}</span>
                </div>
                <div className="cate-slider__item__info__btn">
                    <Link to={props.item.path}>
                        <button>Xem chi tiết</button>
                    </Link>
                </div>
            </div>
            <div className="cate-slider__item__img">
                <div className={`shape bg-${props.item.color}`}></div>
                <img src={props.item.img} alt="" />
            </div>
        </div>
    );
};
export default Categories;
