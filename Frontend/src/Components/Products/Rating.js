import React from 'react'

const Rating = ({value, text}) => {
    return (
        <div className="Rating">
            <span>
                <i className={value >= 1 ? 'fas fa--star'
                : value >= 0.5 ? 'fas far-star-half-alt'
                : 'fas far-star'
            }></i>
            </span>

            
        </div>
    )
}

export default Rating
