import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {setPostsPage} from "../store/action-creators/posts";


const Paginator = (props: any) => {
    let pageCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    let portionSize = 5;
    let portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    const dispatch = useDispatch();


    return <div className='page-numbers'>
        {portionNumber === 1 ? <div>Назад</div> : portionNumber > 0 &&
            <div className='page-number__left-bottom' onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Назад</div>
        }
        <div className='page-number__numbers'>
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    let currentClass = props.currentPage === p ? 'page-number active' : 'page-number';
                    return <span key={p} className={currentClass} onClick={(e) => {
                        dispatch(setPostsPage(p))
                    }}>{p}</span>
                })}
        </div>

        {portionCount > portionNumber ?
            <div className='page-number__right-bottom' onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>Далее</div> : <div>Далее</div>
        }
    </div>
}

export default Paginator;