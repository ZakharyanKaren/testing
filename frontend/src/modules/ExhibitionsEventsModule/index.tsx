"use client";

import { useState } from "react";

import Pagination from "./components/Pagination/Pagination";

import ModuleLayout from "@/shared/layouts/ModuleLayout/ModuleLayout";
import Card from "@/modules/ExhibitionsEventsModule/components/Card/Card";

function ExhibitionsEventsModule() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const PAGE_COUNT: number = 2;

  const goToPrevPage = () => {
    if (currentPage > 1 && PAGE_COUNT !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < PAGE_COUNT && PAGE_COUNT !== 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const setPage = (page: number | string) => {
    if (page !== "..." && typeof page === "number") {
      setCurrentPage(page);
    }
  };

  const data = [
    {
      className: "flex flex-col md:flex-row gap-[30px]",
      cardClassName: "flex-1 w-full md:w-1/2",
      title: "Review of Museum Visits",
      w: "w-full",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  ];

  return (
    <ModuleLayout title1='exhibitions' title2='and events'>
      <div className={`${currentPage === 1 ? "flex" : "hidden"} flex-col gap-6 md:gap-[30px] mt-6 md:mt-15 mb-15`}>
        {/* {data.map((item) => {
          return (
            <p>{item}</p>
          )
        })} */}
        <div className='flex flex-col md:flex-row gap-[30px]'>
          <div className='flex-1 w-full md:w-1/2'>
            <Card
              title='Review of Museum Visits'
              w='w-full'
              desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
              className='flex-1 w-full'
            />
          </div>

          <div className='flex flex-1 w-full md:w-1/2 gap-3 md:gap-[30px]'>
            <Card
              title='Review of Museum Visits'
              desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
            <Card
              title='Review of Museum Visits'
              desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between gap-6 md:gap-[30px]'>
          <div className='flex gap-3 md:gap-[30px]'>
            <Card
              title='Review of Museum Visits'
              w='md:max-w-[287px]'
              desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
            <Card
              title='Review of Museum Visits'
              w='md:max-w-[287px]'
              desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
          </div>
          <div className='flex gap-3 md:gap-[30px]'>
            <Card
              title='Review of Museum Visits'
              w='md:max-w-[287px]'
              desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
            <Card
              title='Review of Museum Visits'
              w='md:max-w-[287px]'
              desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between gap-6 md:gap-[30px]'>
          <div className='flex gap-3 md:gap-[30px]'>
            <Card
              title='Review of Museum Visits'
              w='md:max-w-[287px]'
              desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
            <Card
              title='Review of Museum Visits'
              w='md:max-w-[287px]'
              desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
          </div>
          <div className='flex gap-3 md:gap-[30px]'>
            <Card
              title='Review of Museum Visits'
              w='md:max-w-[287px]'
              desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
            <Card
              title='Review of Museum Visits'
              w='md:max-w-[287px]'
              desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between gap-6 md:gap-[30px]'>
          <div className='flex gap-3 md:gap-[30px]'>
            <Card
              title='Review of Museum Visits'
              w='md:max-w-[287px]'
              desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
            <Card
              title='Review of Museum Visits'
              w='md:max-w-[287px]'
              desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
          </div>
          <div className='flex gap-3 md:gap-[30px]'>
            <Card
              title='Review of Museum Visits'
              w='md:max-w-[287px]'
              desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
            <Card
              title='Review of Museum Visits'
              w='md:max-w-[287px]'
              desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
          </div>
        </div>
      </div>

      <div className={`${currentPage === 2 ? "flex" : "hidden"} flex-col gap-6 md:gap-[30px] mt-6 md:mt-15 mb-15`}>
        <div className='flex flex-col md:flex-row gap-[30px]'>
          <Card
            title='Review of Museum Visits'
            w='w-full'
            desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            className='flex-1 w-full md:w-1/2'
          />

          <div className='flex flex-1 w-full md:w-1/2 gap-3 md:gap-[30px]'>
            <Card
              title='Review of Museum Visits'
              desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
            <Card
              title='Review of Museum Visits'
              desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between gap-6 md:gap-[30px]'>
          <div className='flex gap-3 md:gap-[30px]'>
            <Card
              title='Review of Museum Visits'
              w='md:max-w-[287px]'
              desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
            <Card
              title='Review of Museum Visits'
              w='md:max-w-[287px]'
              desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
          </div>
          <div className='flex gap-3 md:gap-[30px]'>
            <Card
              title='Review of Museum Visits'
              w='md:max-w-[287px]'
              desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
            <Card
              title='Review of Museum Visits'
              w='md:max-w-[287px]'
              desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between gap-6 md:gap-[30px]'>
          <div className='flex gap-3 md:gap-[30px]'>
            <Card
              title='Review of Museum Visits'
              w='md:max-w-[287px]'
              desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
            <Card
              title='Review of Museum Visits'
              w='md:max-w-[287px]'
              desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
          </div>
          <div className='flex gap-3 md:gap-[30px]'>
            <Card
              title='Review of Museum Visits'
              w='md:max-w-[287px]'
              desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
            <Card
              title='Review of Museum Visits'
              w='md:max-w-[287px]'
              desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between gap-6 md:gap-[30px]'>
          <div className='flex gap-3 md:gap-[30px]'>
            <Card
              title='Review of Museum Visits'
              w='md:max-w-[287px]'
              desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
            <Card
              title='Review of Museum Visits'
              w='md:max-w-[287px]'
              desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
          </div>
          <div className='flex gap-3 md:gap-[30px]'>
            <Card
              title='Review of Museum Visits'
              w='md:max-w-[287px]'
              desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
            <Card
              title='Review of Museum Visits'
              w='md:max-w-[287px]'
              desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
          </div>
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        pageCount={PAGE_COUNT}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
        setPage={setPage}
      />
    </ModuleLayout>
  );
}

export default ExhibitionsEventsModule;
