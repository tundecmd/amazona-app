import React from 'react'

const Rating = ({ rating, numReviews }) => {
    return (
        <div className="rating">
            <span><i className={
                rating >= 1 
                    ? 'fa fa-star'
                    : rating >= 0.5
                    ? 'fa fa-star-half-o'
                    : 'fa fa-star-o'
            }
            > </i></span>
            <span><i className={
                rating >= 2 
                    ? 'fa fa-star'
                    : rating >= 1.5
                    ? 'fa fa-star-half-o'
                    : 'fa fa-star-o'
            }
            > </i></span>
            <span><i className={
                rating >= 3
                    ? 'fa fa-star'
                    : rating >= 2.5
                    ? 'fa fa-star-half-o'
                    : 'fa fa-star-o'
            }
            > </i></span>
            <span><i className={
                rating >= 4
                    ? 'fa fa-star'
                    : rating >= 3.5
                    ? 'fa fa-star-half-o'
                    : 'fa fa-star-o'
            }
            > </i></span>
            <span><i className={
                rating >= 5
                    ? 'fa fa-star'
                    : rating >= 4.5
                    ? 'fa fa-star-half-o'
                    : 'fa fa-star-o'
            }
            > </i></span>
            <span>{`${numReviews} reviews`}</span>
        </div>
    )
}

export default Rating;



// function rator1(rating) {
//     switch (rating) {
//         case rating >= 1:
//             return 'fa fa-star';
//         case rating >= 0.5:
//             return 'fa fa-star-half-o';
//         default:
//             return 'fa fa-star-o';
//     }
// }

// function rator2(rating) {
//     switch (rating) {
//         case rating >= 2:
//             return 'fa fa-star';
//         case rating >= 1.5:
//             return 'fa fa-star-half-o';
//         default:
//             return 'fa fa-star-o';
//     }
// }

// function rator3(rating) {
//     switch (rating) {
//         case rating >= 3:
//             return 'fa fa-star';
//         case rating >= 2.5:
//             return 'fa fa-star-half-o';
//         default:
//             return 'fa fa-star-o';
//     }
// }

// function rator4(rating) {
//     switch (rating) {
//         case rating >= 4:
//             return 'fa fa-star';
//         case rating >= 3.5:
//             return 'fa fa-star-half-o';
//         default:
//             return 'fa fa-star-o';
//     }
// }

// function rator5(rating) {
//     switch (rating) {
//         case rating >= 5:
//             return 'fa fa-star';
//         case rating >= 4.5:
//             return 'fa fa-star-half-o';
//         default:
//             return 'fa fa-star-o';
//     }
// }