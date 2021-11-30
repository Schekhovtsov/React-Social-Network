import s from './Paginator.module.css';
import React, {useEffect, useState} from 'react';

const Paginator = ({totalItemsCount, pageSize,
                   currentPage, onPageChanged,
                   batchSize, whoPaginating}) => {

    let pagesCount;

    pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let batchCount = Math.ceil(pagesCount / batchSize);
    let [batchNumber, setBatchNumber] = useState(1);

    let leftBorderInBatchNumber = (batchNumber - 1) * batchSize + 1;
    let rightBorderInBatchNumber = batchNumber * batchSize;

    useEffect(() => {
        setBatchNumber(Math.ceil(currentPage/batchSize));
    }, [currentPage]);

    return (
        <div className={s.changePageButton}>

            { batchNumber > 1 &&
            <span className={currentPage}
                  onClick={ () => {
                      setBatchNumber(batchNumber - 1);
                  } }> ←
            </span> }

            {
                pages
                    .filter(page => page >= leftBorderInBatchNumber &&
                                    page <= rightBorderInBatchNumber)
                    .map(page => {
                        return (
                            <span key={page} className={currentPage === page && s.selectedPage}
                                  onClick={(e) => {
                                      onPageChanged(page);
                                  }}>{page}</span>
                        )
                    }
                )
            }

            { batchCount > batchNumber &&
            <span className={currentPage}
                  onClick={ () => {
                      setBatchNumber(batchNumber + 1);
                  } }> →
            </span> }

            <span className={currentPage}
                  onClick={ () => { setBatchNumber(batchCount) } }> L
            </span>

        </div>
    );

}

export default Paginator;