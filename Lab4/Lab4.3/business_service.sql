-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 11, 2022 lúc 07:42 PM
-- Phiên bản máy phục vụ: 10.4.18-MariaDB
-- Phiên bản PHP: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- Cấu trúc bảng cho bảng `biz_categories`
CREATE TABLE `biz_categories` (
  `BusinessID` varchar(50) NOT NULL,
  `CategoryID` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
-- Cấu trúc bảng cho bảng `businesses`
--

CREATE TABLE `businesses` (
  `BusinessID` varchar(50) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Address` varchar(50) NOT NULL,
  `City` varchar(50) NOT NULL,
  `Telephone` varchar(10) NOT NULL,
  `URL` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Cấu trúc bảng cho bảng `categories`

CREATE TABLE `categories` (
  `CategoryID` varchar(50) NOT NULL,
  `Title` varchar(50) NOT NULL,
  `Description` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Đang đổ dữ liệu cho bảng `categories`

INSERT INTO `categories` (`CategoryID`, `Title`, `Description`) VALUES
('AUTO', 'Automotive Parts and Supplies', 'Accessories for your car'),
('FISH', 'Seafood Stores and Restaurants', 'Place to get your fish'),
('HEALTH', 'Heath And Beauty', 'Everything for the body'),
('SCHOOL', 'Schools and Colleges', 'Public and Private Learning'),
('SPORTS', 'Community Sports and Recreations', 'Guide to Parks and Leagues');

-- Chỉ mục cho bảng `biz_categories`

ALTER TABLE `biz_categories`
  ADD PRIMARY KEY (`BusinessID`,`CategoryID`),
  ADD KEY `CategoryID` (`CategoryID`);

-- Chỉ mục cho bảng `businesses`

ALTER TABLE `businesses`
  ADD PRIMARY KEY (`BusinessID`);

-- Chỉ mục cho bảng `categories`

ALTER TABLE `categories`
  ADD PRIMARY KEY (`CategoryID`);

-- Các ràng buộc cho bảng `biz_categories`

ALTER TABLE `biz_categories`
  ADD CONSTRAINT `biz_categories_ibfk_1` FOREIGN KEY (`BusinessID`) REFERENCES `businesses` (`BusinessID`),
  ADD CONSTRAINT `biz_categories_ibfk_2` FOREIGN KEY (`CategoryID`) REFERENCES `categories` (`CategoryID`);
COMMIT;
