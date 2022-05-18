/* eslint-disable */
import React from 'react';
import { IPageLoadingProps } from './interface';

const ApiLoading: React.FunctionComponent<IPageLoadingProps> = ({ loadingColor, isLoading }) => {
    return (
        <>
            {isLoading && (
                <div className="apiLoading">
                    <div className="loading__loader">
                        <div className="loading__loader__bar" style={{ backgroundColor: `${loadingColor}` }} />
                        <div className="loading__loader__bar" style={{ backgroundColor: `${loadingColor}` }} />
                        <div className="loading__loader__bar" style={{ backgroundColor: `${loadingColor}` }} />
                        <div className="loading__loader__bar" style={{ backgroundColor: `${loadingColor}` }} />
                        <div className="loading__loader__bar" style={{ backgroundColor: `${loadingColor}` }} />
                        <div className="loading__loader__ball" style={{ backgroundColor: `${loadingColor}` }} />
                    </div>
                    <div className="loading__text">
                        <div className="loading__text__item" style={{ color: `${loadingColor}` }}>
                            L
                        </div>
                        <div className="loading__text__item" style={{ color: `${loadingColor}` }}>
                            O
                        </div>
                        <div className="loading__text__item" style={{ color: `${loadingColor}` }}>
                            A
                        </div>
                        <div className="loading__text__item" style={{ color: `${loadingColor}` }}>
                            D
                        </div>
                        <div className="loading__text__item" style={{ color: `${loadingColor}` }}>
                            I
                        </div>
                        <div className="loading__text__item" style={{ color: `${loadingColor}` }}>
                            N
                        </div>
                        <div className="loading__text__item" style={{ color: `${loadingColor}` }}>
                            G
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ApiLoading;

ApiLoading.defaultProps = {
    loadingColor: '#fff'
};
