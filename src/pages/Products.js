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
// const [target, setTarget] = useState([])
//   useEffect(() => {
//     window.addEventListener('message', function(event) {
//       console.log("Message received from the parent: " + event.data); // Message received from parent

//   if (event.data === 1) {
//     setTarget([
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-183.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-183.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-182.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-182.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-181.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-181.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-180.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-180.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-179.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-179.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-178.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-178.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-177.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-177.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-176.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-176.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-175.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-175.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-174.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-174.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-173.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-173.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-172.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-172.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-171.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-171.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-170.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-170.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-169.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-169.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-168.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-168.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-167.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-167.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-166.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-166.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-165.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-165.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-164.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-164.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-163.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-163.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-162.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-162.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-161.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-161.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-160.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-160.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-159.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-159.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-158.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-158.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-157.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-157.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-156.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-156.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-155.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-155.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-154.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-154.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-153.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-153.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-152.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-152.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-151.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-151.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-150.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-150.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-149.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-149.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-148.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-148.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-147.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-147.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-146.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-146.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-145.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-145.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-144.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-144.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-143.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-143.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-142.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-142.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-141.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-141.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-140.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-140.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-139.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-139.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-138.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-138.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-137.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-137.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-136.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-136.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-135.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-135.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-134.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-134.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-133.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-133.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-132.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-132.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-131.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-131.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-130.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-130.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-129.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-129.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-128.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-128.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-127.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-127.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-126.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-126.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-125.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-125.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-124.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-124.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-123.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-123.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-122.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-122.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-121.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-121.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-120.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-120.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-119.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-119.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-118.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-118.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-117.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-117.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-116.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-116.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-115.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-115.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-114.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-114.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-113.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-113.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-112.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-112.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-111.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-111.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-110.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-110.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-109.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-109.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-108.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-108.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-107.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-107.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-106.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-106.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-105.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-105.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-104.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-104.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-103.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-103.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-102.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-102.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-101.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-101.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-100.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-100.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-99.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-99.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-98.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-98.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-97.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-97.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-96.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-96.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-95.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-95.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-94.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-94.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-93.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-93.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-92.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-92.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-91.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-91.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-90.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-90.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-89.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-89.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-88.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-88.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-87.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-87.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-86.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-86.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-85.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-85.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-84.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-84.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-83.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-83.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-82.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-82.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-81.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-81.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-80.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-80.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-79.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-79.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-78.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-78.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-77.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-77.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-76.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-76.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-75.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-75.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-74.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-74.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-73.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-73.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-72.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-72.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-71.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-71.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-70.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-70.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-69.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-69.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-68.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-68.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-67.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-67.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-66.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-66.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-65.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-65.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-64.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-64.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-63.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-63.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-62.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-62.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-61.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-61.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-60.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-60.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-59.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-59.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-58.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-58.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-57.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-57.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-56.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-56.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-55.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-55.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-54.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-54.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-53.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-53.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-52.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-52.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-51.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-51.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-50.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-50.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-49.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-49.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-48.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-48.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-47.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-47.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-46.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-46.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-45.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-45.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-44.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-44.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-43.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-43.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-42.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-42.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-41.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-41.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-40.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-40.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-39.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-39.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-38.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-38.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-37.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-37.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-36.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-36.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-35.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-35.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-34.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-34.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-33.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-33.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-32.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-32.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-31.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-31.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-30.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-30.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-29.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-29.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-28.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-28.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-27.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-27.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-26.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-26.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-25.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-25.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-24.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-24.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-23.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-23.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-22.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-22.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-21.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-21.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-20.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-20.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-19.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-19.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-18.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-18.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-17.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-17.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-16.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-16.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-15.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-15.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-14.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-14.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-13.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-13.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-12.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-12.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-11.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-11.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-10.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-10.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-9.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-9.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-8.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-8.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-7.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-7.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-6.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-6.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-5.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-5.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-4.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-4.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-3.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-3.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-2.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-2.png",
//       "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-1.png",
//     ])
//   }
//   else if(event.data === 2){
//     setTarget([
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-1.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-2.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-2.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-3.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-3.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-4.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-4.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-5.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-5.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-6.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-6.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-7.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-7.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-8.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-8.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-9.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-9.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-10.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-10.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-11.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-11.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-12.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-12.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-13.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-13.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-14.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-14.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-15.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-15.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-16.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-16.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-17.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-17.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-18.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-18.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-19.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-19.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-20.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-20.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-21.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-21.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-22.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-22.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-23.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-23.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-24.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-24.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-25.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-25.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-26.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-26.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-27.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-27.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-28.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-28.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-29.png",
//       "https://ostan-mr.ir/uploads/books/saramad/saramad-29.png",

//     ])
//   }
//     });
//   })
  const pages = {
    Books: [
      {
        slides: [
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-1.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-2.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-2.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-3.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-3.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-4.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-4.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-5.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-5.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-6.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-6.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-7.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-7.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-8.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-8.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-9.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-9.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-10.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-10.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-11.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-11.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-12.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-12.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-13.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-13.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-14.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-14.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-15.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-15.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-16.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-16.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-17.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-17.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-18.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-18.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-19.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-19.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-20.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-20.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-21.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-21.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-22.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-22.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-23.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-23.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-24.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-24.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-25.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-25.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-26.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-26.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-27.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-27.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-28.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-28.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-29.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-29.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-30.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-30.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-31.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-31.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-32.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-32.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-33.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-33.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-34.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-34.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-35.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-35.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-36.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-36.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-37.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-37.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-38.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-38.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-39.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-39.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-40.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-40.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-41.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-41.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-42.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-42.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-43.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-43.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-44.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-44.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-45.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-45.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-46.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-46.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-47.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-47.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-48.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-48.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-49.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-49.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-50.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-50.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-51.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-51.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-52.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-52.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-53.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-53.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-54.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-54.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-55.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-55.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-56.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-56.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-57.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-57.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-58.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-58.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-59.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-59.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-60.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-60.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-61.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-61.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-62.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-62.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-63.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-63.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-64.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-64.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-65.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-65.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-66.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-66.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-67.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-67.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-68.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-68.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-69.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-69.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-70.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-70.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-71.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-71.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-72.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-72.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-73.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-73.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-74.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-74.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-75.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-75.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-76.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-76.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-77.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-77.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-78.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-78.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-79.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-79.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-80.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-80.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-81.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-81.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-82.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-82.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-83.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-83.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-84.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-84.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-85.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-85.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-86.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-86.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-87.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-87.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-88.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-88.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-89.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-89.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-90.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-90.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-91.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-91.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-92.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-92.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-93.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-93.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-94.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-94.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-95.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-95.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-96.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-96.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-97.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-97.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-98.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-98.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-99.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-99.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-100.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-100.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-101.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-101.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-102.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-102.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-103.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-103.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-104.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-104.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-105.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-105.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-106.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-106.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-107.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-107.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-108.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-108.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-109.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-109.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-110.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-110.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-111.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-111.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-112.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-112.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-113.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-113.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-114.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-114.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-115.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-115.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-116.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-116.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-117.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-117.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-118.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-118.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-119.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-119.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-120.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-120.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-121.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-121.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-122.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-122.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-123.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-123.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-124.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-124.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-125.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-125.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-126.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-126.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-127.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-127.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-128.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-128.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-129.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-129.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-130.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-130.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-131.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-131.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-132.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-132.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-133.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-133.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-134.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-134.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-135.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-135.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-136.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-136.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-137.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-137.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-138.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-138.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-139.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-139.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-140.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-140.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-141.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-141.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-142.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-142.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-143.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-143.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-144.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-144.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-145.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-145.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-146.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-146.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-147.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-147.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-148.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-148.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-149.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-149.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-150.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-150.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-151.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-151.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-152.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-152.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-153.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-153.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-154.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-154.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-155.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-155.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-156.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-156.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-157.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-157.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-158.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-158.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-159.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-159.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-160.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-160.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-161.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-161.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-162.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-162.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-163.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-163.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-164.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-164.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-165.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-165.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-166.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-166.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-167.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-167.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-168.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-168.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-169.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-169.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-170.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-170.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-171.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-171.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-172.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-172.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-173.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-173.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-174.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-174.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-175.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-175.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-176.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-176.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-177.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-177.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-178.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-178.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-179.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-179.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-180.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-180.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-181.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-181.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-182.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-182.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-183.png",
          "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-183.png",
            ],
        _id: "66c3055ef1466acf04731b76",
        title: "رهاورد خدمت",
        created_at: "2024-08-13T08:58:33.656Z",
        updated_at: "2024-08-13T08:58:33.656Z",
        __v: 0,
        url: "https://ostan-mr.ir/uploads/books/rahavard-final/rahavard-1.png",
        id: "66c3055ef1466acf04731b76",
      },
    ],
  };
  const showReverse = pages.Books[0].slides.reverse();
  // const val = showReverse.unshift('')

  const totalPages = pages.Books[0].slides.length;


  const [showText, setShowText] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const promises = showReverse.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
      await Promise.all(promises);
      setImagesLoaded(true); // Set this to true once all images are loaded
    };

    preloadImages();
  }, [showReverse]);

  // useEffect(() => {
  //   // تنظیم تایمر برای نمایش متن پس از 5 ثانیه
  // //  setImagesLoaded(false);
  //   setTimeout(() => {
  //     setImagesLoaded(false);
  //   }, 3000);

  //   // تخریب تایمر در هنگام عدم نیاز به آن
  //   return () => {
  //     clearTimeout(setImagesLoaded(true));
  //   };
  // }, [target]);
    // useEffect(() => {
    //   // تنظیم تایمر برای نمایش متن پس از 5 ثانیه
    //   const timer = setTimeout(() => {
    //     setShowText(true);
    //   }, 10000);

    //   // تخریب تایمر در هنگام عدم نیاز به آن
    //   return () => {
    //     clearTimeout(timer);
    //   };
    // }, []);
   
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
      {imagesLoaded ? (
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
          </div>


        </div>
      ))}

    </HTMLFlipBook>
    ) : (
      <>
<span class="loader"></span>
      <div className="lazyload">
 <h2>درحال دریافت اطلاعات</h2>
 <p>ممکن است کمی زمان بر باشد، لطفا منتظر بمانید...</p>
      </div>
      </>
    )}
    {imagesLoaded && (
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
    )}
  </div>
);
}

export default Products;
