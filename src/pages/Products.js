import React, { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

function Products(props) {
  const bookRef = useRef();

  // حواست باشه به خاطر برعکس کردن کتاب لاجیک دکمه بعدی و قبلی هم برعکس شده

  const goToNextPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev();
    }
  };

  const goToPrevPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
    }
  };
  const closeBook = () => {
    if (bookRef.current) {
      // bookRef.current.pageFlip().flipClose();
      props.setStatus(false);
    }
  };


  useEffect(() => {
    console.log('صفحه به طور کامل لود شده است.');
  }, []);



  const pages = {
    Books: [
      {
        slides: [
          "https://ostan-mr.ir/uploads/books/tumb.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-2.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-2.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-3.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-3.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-4.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-4.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-5.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-5.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-6.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-6.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-7.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-7.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-8.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-8.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-9.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-9.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-10.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-10.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-11.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-11.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-12.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-12.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-13.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-13.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-14.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-14.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-15.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-15.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-16.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-16.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-17.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-17.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-18.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-18.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-19.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-19.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-20.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-20.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-21.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-21.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-22.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-22.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-23.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-23.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-24.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-24.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-25.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-25.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-26.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-26.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-27.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-27.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-28.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-28.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-29.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-29.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-30.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-30.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-31.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-31.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-32.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-32.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-33.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-33.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-34.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-34.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-35.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-35.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-36.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-36.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-37.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-37.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-38.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-38.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-39.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-39.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-40.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-40.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-41.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-41.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-42.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-42.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-43.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-43.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-44.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-44.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-45.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-45.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-46.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-46.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-47.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-47.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-48.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-48.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-49.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-49.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-50.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-50.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-51.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-51.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-52.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-52.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-53.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-53.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-54.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-54.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-55.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-55.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-56.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-56.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-57.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-57.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-58.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-58.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-59.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-59.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-60.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-60.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-61.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-61.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-62.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-62.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-63.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-63.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-64.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-64.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-65.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-65.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-66.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-66.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-67.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-67.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-68.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-68.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-69.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-69.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-70.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-70.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-71.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-71.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-72.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-72.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-73.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-73.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-74.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-74.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-75.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-75.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-76.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-76.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-77.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-77.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-78.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-78.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-79.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-79.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-80.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-80.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-81.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-81.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-82.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-82.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-83.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-83.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-84.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-84.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-85.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-85.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-86.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-86.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-87.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-87.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-88.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-88.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-89.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-89.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-90.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-90.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-91.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-91.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-92.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-92.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-93.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-93.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-94.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-94.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-95.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-95.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-96.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-96.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-97.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-97.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-98.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-98.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-99.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-99.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-100.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-100.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-101.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-101.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-102.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-102.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-103.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-103.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-104.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-104.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-105.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-105.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-106.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-106.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-107.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-107.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-108.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-108.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-109.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-109.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-110.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-110.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-111.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-111.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-112.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-112.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-113.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-113.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-114.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-114.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-115.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-115.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-116.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-116.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-117.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-117.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-118.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-118.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-119.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-119.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-120.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-120.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-121.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-121.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-122.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-122.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-123.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-123.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-124.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-124.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-125.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-125.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-126.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-126.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-127.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-127.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-128.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-128.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-129.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-129.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-130.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-130.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-131.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-131.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-132.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-132.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-133.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-133.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-134.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-134.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-135.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-135.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-136.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-136.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-137.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-137.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-138.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-138.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-139.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-139.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-140.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-140.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-141.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-141.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-142.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-142.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-143.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-143.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-144.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-144.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-145.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-145.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-146.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-146.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-147.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-147.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-148.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-148.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-149.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-149.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-150.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-150.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-151.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-151.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-152.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-152.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-153.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-153.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-154.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-154.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-155.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-155.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-156.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-156.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-157.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-157.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-158.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-158.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-159.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-159.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-160.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-160.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-161.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-161.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-162.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-162.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-163.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-163.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-164.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-164.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-165.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-165.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-166.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-166.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-167.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-167.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-168.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-168.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-169.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-169.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-170.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-170.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-171.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-171.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-172.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-172.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-173.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-173.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-174.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-174.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-175.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-175.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-176.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-176.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-177.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-177.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-178.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-178.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-179.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-179.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-180.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-180.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-181.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-181.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-182.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-182.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-183.jpg",
          "https://ostan-mr.ir/uploads/books/rahavard/rahavard-183.jpg",
        ],
        _id: "66c3055ef1466acf04731b76",
        title: "رهاورد خدمت",
        created_at: "2024-08-13T08:58:33.656Z",
        updated_at: "2024-08-13T08:58:33.656Z",
        __v: 0,
        url: "https://ostan-mr.ir/uploads/books/tumb.jpg",
        id: "66c3055ef1466acf04731b76",
      },
    ],
  };
  const showReverse = pages.Books[0].slides.reverse();
  // const val = showReverse.unshift('')

  const totalPages = pages.Books[0].slides.length;


  const [showText, setShowText] = useState(false);

    useEffect(() => {
      // تنظیم تایمر برای نمایش متن پس از 5 ثانیه
      const timer = setTimeout(() => {
        setShowText(true);
      }, 10000);

      // تخریب تایمر در هنگام عدم نیاز به آن
      return () => {
        clearTimeout(timer);
      };
    }, []);
   
return (
  <div
    dir="rtl"
    style={{
      width: "100%",
      height: "240px",
      maxHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      direction: "rtl",
      position: "absolute",
    }}>
    <HTMLFlipBook
      startZIndex={2}
      ref={bookRef}
      width={400}
      height={550}
      showCover={false} // showCover should be a boolean, not a string
      startPage={totalPages - 1}>
      {pages.Books[0].slides.map((item, index) => (
        <div className="demoPage" key={index}>

          <div
            className="page-image image"
            style={{
              backgroundImage: `url(${item})`,
            }}>
            {(!showText && (<span className="loader"></span>))}

          </div>


        </div>
      ))}

    </HTMLFlipBook>

    <div
      className="control"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "10px",
        marginTop: "10px",
        zIndex: "10000",
      }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "30px",
        }}>
        <svg
          style={{
            cursor: "pointer"
          }}
          onClick={goToPrevPage}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.43 5.92993L20.5 11.9999L14.43 18.0699"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.5 12H20.33"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <svg
          style={{
            cursor: "pointer"
          }}
          className="nextBtn"
          onClick={goToNextPage}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.43 5.92993L20.5 11.9999L14.43 18.0699"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.5 12H20.33"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>


    </div>
  </div>
);
}

export default Products;
