"use client";

import { FC, useEffect } from "react";

import "./styles.css";
import Image from "@/shared/components/Image/Image";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: FC<IModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    console.warn("Modal opened");
  }, []);

  return (
    <div className={`${isOpen ? "open" : "close"} modalWrapper`}>
      <div className='modal' />
      <div className='content'>
        <section className='content-section relative p-6 md:p-8 xl:p-10 rounded-[10px]'>
          <button
            type='button'
            onClick={onClose}
            className='absolute top-4 md:top-5 xl:top-6 right-[34px] md:right-9 xl:right-[42px] '
          >
            <Image src='/svgs/close_black_icon.svg' width={24} height={24} alt='close' className='w-5 h-5' />
          </button>
          {children}
          <button
            type='button'
            className='mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700'
            onClick={onClose}
          >
            Cancel
          </button>
        </section>
      </div>
    </div>
  );
};

export default Modal;
