-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 10 月 26 日 08:08
-- 服务器版本: 5.5.53
-- PHP 版本: 5.4.45

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `file_img`
--

-- --------------------------------------------------------

--
-- 表的结构 `img_type`
--

CREATE TABLE IF NOT EXISTS `img_type` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `img_name` varchar(300) NOT NULL COMMENT '图片名称',
  `img_url` varchar(300) NOT NULL COMMENT '图片url',
  `adv_style` int(1) DEFAULT NULL COMMENT '风格',
  `img_type` varchar(300) DEFAULT NULL COMMENT '标签',
  `addtime` int(11) NOT NULL COMMENT '添加时间',
  `img_title` varchar(300) NOT NULL COMMENT '图片标签',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='图片库' AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
