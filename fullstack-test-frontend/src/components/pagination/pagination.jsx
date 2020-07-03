import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {FiArrowLeftCircle, FiArrowRightCircle} from 'react-icons/fi';

export const Pagination = () => ({
    classes,
    total,
    page,
    pageSize,
    onChange,
    fetch
}) => {
    const begin = (page - 1) * pageSize + 1;
    const end = begin + pageSize - 1;

    useEffect(() => {
        if (total === 0) {
            onChange({page: page, fetch: fetch});
        }
    });

    return (
        <ul className={classes.links}>
            <li className={classes.item}>
                <button
                    className={classes.button}
                    onClick={() => {
                        if (page > 1) {
                            onChange({page: page - 1, fetch: fetch});
                        }
                    }}>
                    <FiArrowLeftCircle size={25} color="#A5AEB3"/>
                </button>
            </li>
            <li className={classes.item}>
                {page}
            </li>
            <li className={classes.item}>
                <button
                    className={classes.button}
                    onClick={() => {
                        if (end < total) {
                            onChange({page: page + 1, fetch: fetch});
                        }
                    }}
                >
                    <FiArrowRightCircle size={25} color="#A5AEB3"/>
                </button>
            </li>
            <li className={classes.item}>
                {begin}-{ end < total ? end : total} из {total}
            </li>
        </ul>
    );
};
export default Pagination;
