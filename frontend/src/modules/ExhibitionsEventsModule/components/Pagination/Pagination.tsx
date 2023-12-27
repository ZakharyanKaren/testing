"use client";

import { FC } from "react";

import getPagesToRender from "@/helpers/functions";

interface IPaginationProps {
  currentPage: number;
  pageCount: number;
  goToPrevPage: () => void;
  goToNextPage: () => void;
  setPage: (page: number | string) => void;
}

const Pagination: FC<IPaginationProps> = ({ currentPage, pageCount, goToPrevPage, goToNextPage, setPage }) => {
  const paginationButtons = getPagesToRender(currentPage, pageCount);

  return (
    <div className='flex gap-3 items-center justify-center'>
      <button type='button' onClick={goToPrevPage}>
        <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <rect x='0.5' y='0.5' width='31' height='31' rx='15.5' stroke={currentPage === 1 ? "#7D7D7D" : "#000"} />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M18.5638 10.1894C18.8566 10.4823 18.8566 10.9572 18.5638 11.2501L14.2171 15.5967C13.9966 15.8172 13.9966 16.1823 14.2171 16.4027L18.5638 20.7494C18.8566 21.0423 18.8566 21.5172 18.5638 21.8101C18.2709 22.1029 17.796 22.1029 17.5031 21.8101L13.1564 17.4634C12.3502 16.6572 12.3502 15.3423 13.1564 14.5361L17.5031 10.1894C17.796 9.8965 18.2709 9.8965 18.5638 10.1894Z'
            fill={currentPage === 1 ? "#7D7D7D" : "#000"}
          />
        </svg>
      </button>

      {paginationButtons.map((label: string | number, index: number) => (
        <button
          type='button'
          // eslint-disable-next-line react/no-array-index-key
          key={`${label}-${index}`}
          onClick={() => setPage(label)}
          className={`${label === currentPage ? "text-black" : "text-grey"} ${
            currentPage === label ? "cursor-pointer" : "cursor-default"
          }}`}
        >
          {label}
        </button>
      ))}
      <button type='button' onClick={goToNextPage}>
        <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <rect
            x='0.5'
            y='0.5'
            width='31'
            height='31'
            rx='15.5'
            stroke={currentPage === pageCount ? "#7D7D7D" : "#000"}
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M13.4365 10.1894C13.7294 9.8965 14.2042 9.8965 14.4971 10.1894L18.8438 14.5361C19.65 15.3423 19.65 16.6572 18.8438 17.4634L14.4971 21.8101C14.2042 22.1029 13.7294 22.1029 13.4365 21.8101C13.1436 21.5172 13.1436 21.0423 13.4365 20.7494L17.7831 16.4027C18.0036 16.1823 18.0036 15.8172 17.7831 15.5967L13.4365 11.2501C13.1436 10.9572 13.1436 10.4823 13.4365 10.1894Z'
            fill={currentPage === pageCount ? "#7D7D7D" : "#000"}
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
