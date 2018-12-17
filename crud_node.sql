-- phpMyAdmin SQL Dump
-- version 4.0.10deb1ubuntu0.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 14, 2018 at 07:43 PM
-- Server version: 5.5.62-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `crud_node`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `status` enum('ACTIVE','INACTIVE','ALL') DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `image`, `status`, `created_at`, `updated_at`) VALUES
(1, 'first category', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', NULL, 'ACTIVE', '2018-03-31 00:28:00', '2018-04-04 18:04:44'),
(2, 'two category', 'wewqewqr', NULL, 'ACTIVE', '2018-03-31 00:28:00', NULL),
(3, 'FFF', ' vasff', NULL, '', '2018-04-03 12:40:07', '2018-04-03 12:40:07'),
(4, 'lll', 'frertrt', NULL, 'ALL', '2018-04-03 12:45:33', '2018-04-03 12:45:33'),
(5, 'pppfff', 'kkk', 'category_image-1522748572989.png', 'ACTIVE', '2018-04-03 12:48:58', '2018-04-03 15:45:58'),
(6, 'XXXXXXXXXX', 'CCCCCCCCC', NULL, 'ACTIVE', '2018-04-04 19:04:11', '2018-04-04 19:04:11'),
(7, 'TTT', 'etrwt', NULL, 'ACTIVE', '2018-04-04 19:19:09', '2018-04-04 19:19:09'),
(8, 'ftgrt', 'ytryrtuyru', NULL, 'ACTIVE', '2018-04-04 19:20:35', '2018-04-04 19:20:35'),
(9, 'yyyy', 'ujuiiii', NULL, 'ACTIVE', '2018-04-04 19:22:01', '2018-04-04 19:22:01');

-- --------------------------------------------------------

--
-- Table structure for table `productes`
--

CREATE TABLE IF NOT EXISTS `productes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` text NOT NULL,
  `product_image` varchar(255) DEFAULT NULL,
  `status` enum('ACTIVE','INACTIVE') DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=22 ;

--
-- Dumping data for table `productes`
--

INSERT INTO `productes` (`id`, `name`, `description`, `product_image`, `status`, `created_at`, `updated_at`) VALUES
(10, 'ppppLLLLL', 'eee', 'product_image-1522823320148.png', 'ACTIVE', '2018-04-01 14:01:28', '2018-04-04 18:05:39'),
(12, 'Test1234', 'aqerewrt', '', 'ACTIVE', '2018-04-02 13:17:59', '2018-04-02 13:17:59'),
(13, 'TTTT', 'TTTTHHHH', 'product_image-1522655325486.png', 'ACTIVE', '2018-04-02 13:18:45', '2018-04-02 13:18:45'),
(14, 'TT', 'trey', NULL, 'ACTIVE', '2018-04-02 13:20:27', '2018-04-02 13:20:27'),
(15, 'kkkkk', 'PPPPP', 'product_image-1522662507207.png', 'ACTIVE', '2018-04-02 15:18:27', '2018-04-02 19:41:36'),
(16, 'TTTT', 'TTTTHHHH', NULL, 'ACTIVE', '2018-04-02 18:21:16', '2018-04-02 18:21:16'),
(17, 'jkhdkhakfh', 'jjhhh jj', NULL, 'ACTIVE', '2018-04-03 12:36:03', '2018-04-03 12:36:03'),
(18, 'GGGG', 'FFF gggg', NULL, 'ACTIVE', '2018-04-03 12:37:37', '2018-04-03 12:37:37'),
(19, 'strwet', 'erteryety', NULL, 'ACTIVE', '2018-04-03 12:38:07', '2018-04-03 12:38:07'),
(20, 'PPP', 'ffff', NULL, 'ACTIVE', '2018-04-03 15:17:02', '2018-04-03 15:17:02'),
(21, 'FFF', 'GGGG', NULL, 'ACTIVE', '2018-04-03 15:17:32', '2018-04-03 15:17:32');

-- --------------------------------------------------------

--
-- Table structure for table `product_categories`
--

CREATE TABLE IF NOT EXISTS `product_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=15 ;

--
-- Dumping data for table `product_categories`
--

INSERT INTO `product_categories` (`id`, `category_id`, `product_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2018-03-31 00:00:00', '2018-03-31 00:00:00'),
(2, 2, 1, '2018-03-31 00:00:00', '2018-03-31 00:00:00'),
(3, 1, 10, '2018-04-01 14:01:28', '2018-04-04 18:18:40'),
(4, 2, 11, '2018-04-01 14:02:02', '2018-04-01 14:02:02'),
(5, 2, 12, '2018-04-02 13:17:59', '2018-04-02 13:17:59'),
(6, 1, 13, '2018-04-02 13:18:45', '2018-04-02 19:53:51'),
(7, 1, 14, '2018-04-02 13:20:28', '2018-04-02 13:20:28'),
(8, 2, 15, '2018-04-02 15:18:27', '2018-04-02 19:42:59'),
(9, 1, 16, '2018-04-02 18:21:16', '2018-04-02 18:21:16'),
(10, 1, 17, '2018-04-03 12:36:03', '2018-04-03 16:04:17'),
(11, 0, 18, '2018-04-03 12:37:37', '2018-04-03 12:37:37'),
(12, 0, 19, '2018-04-03 12:38:07', '2018-04-03 12:38:07'),
(13, 2, 20, '2018-04-03 15:17:03', '2018-04-03 15:17:03'),
(14, 5, 21, '2018-04-03 15:17:32', '2018-04-03 15:23:58');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE IF NOT EXISTS `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) unsigned NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('1oDpyWoINZuOdWlfI1JkyxM4tvJkC6dB', 1523370299, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"passport":{"user":{"id":13,"f_name":"john","l_name":"doe","username":"john","email":"john@gmail.com","profile_pic":"geek-boys-whatsapp-dp-1.jpg","password":"$2a$10$6YplHTNQyLFqLB20hSrkd.er4ABJ59OT.jOBMcwYEfmX7aNkTE2fu","status":"ACTIVE","created_at":"2018-04-05T10:08:20.000Z","updated_at":"2018-04-05T10:08:20.000Z"}}}'),
('CGnqO1aMdLxUpZyz7XVUIw0hPrfoTaa-', 1523456822, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"passport":{"user":{"id":13,"f_name":"doess","l_name":"doe","username":"john","email":"john@gmail.com","profile_pic":"geek-boys-whatsapp-dp-1.jpg","password":"$2a$10$6YplHTNQyLFqLB20hSrkd.er4ABJ59OT.jOBMcwYEfmX7aNkTE2fu","status":"ACTIVE","created_at":"2018-04-05T10:08:20.000Z","updated_at":"2018-04-10T14:16:22.000Z"}}}'),
('ZDW4wOsMd61yhl8QQlM7e9ftRH9daX1p', 1523447348, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"passport":{"user":{"id":13,"f_name":"john","l_name":"doe","username":"john","email":"john@gmail.com","profile_pic":"geek-boys-whatsapp-dp-1.jpg","password":"$2a$10$6YplHTNQyLFqLB20hSrkd.er4ABJ59OT.jOBMcwYEfmX7aNkTE2fu","status":"ACTIVE","created_at":"2018-04-05T10:08:20.000Z","updated_at":"2018-04-05T10:08:20.000Z"}}}');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `f_name` varchar(255) NOT NULL,
  `l_name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `profile_pic` varchar(255) DEFAULT NULL,
  `password` text NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `f_name`, `l_name`, `username`, `email`, `profile_pic`, `password`, `status`, `created_at`, `updated_at`) VALUES
(13, 'doe', 'doe', 'john', 'john@gmail.com', 'geek-boys-whatsapp-dp-1.jpg', '123456', 'ACTIVE', '2018-04-05 15:38:20', '2018-04-10 19:49:26');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
