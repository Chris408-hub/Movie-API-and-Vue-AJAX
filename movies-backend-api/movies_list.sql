-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主机： localhost:8889
-- 生成日期： 2024-03-27 17:23:21
-- 服务器版本： 5.7.39
-- PHP 版本： 7.4.33

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： movies_list
--

-- --------------------------------------------------------

--
-- 表的结构 movies
--

CREATE TABLE movies (
  id int(11) NOT NULL,
  name varchar(255) DEFAULT NULL,
  release_year int(11) DEFAULT NULL,
  description text,
  poster_path varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 movies
--

INSERT INTO movies (id, name, release_year, description, poster_path) VALUES
(1, 'White Snake', 2019, 'A story about the love between a white snake and Xu Xian, and their entanglement with the human world.', 'White_Snake.webp'),
(2, 'Big Fish & Begonia', 2016, 'A mysterious story about the underwater world and the human world, telling an adventurous journey between a girl and a human boy.', 'Big_Fish_Begonia.jpeg'),
(3, 'Legend of Deification\r\n', 2020, 'Tells the story of the ancient Chinese mythological hero Jiang Ziya, who engages in a fierce battle with the gods to save humanity.', 'Legend_of_Deification.png'),
(4, 'Chang\'an', 2023, 'Set in the prosperous Tang Dynasty, the film depicts the chaos of Chang\'an after the An Lushan Rebellion. Gao Shi, trapped in the turmoil, recalls his past with Li Bai.', 'Chang_an.jpeg'),
(5, 'Ne Zha', 2019, 'Adapted from ancient Chinese mythology, it tells the story of Ne Zha growth and his battle with fate between heaven and earth.', 'Ne_Zha.jpeg'),
(6, 'I Am What I Am\r\n', 2021, 'A story about a boy and his lion companion pursuing their dreams together, filled with friendship and adventure.', 'I_Am_What_I_Am.jpeg');

--
-- 转储表的索引
--

--
-- 表的索引 movies
--
ALTER TABLE movies
  ADD PRIMARY KEY (id);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT movies
--
ALTER TABLE movies
  MODIFY id int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
SET FOREIGN_KEY_CHECKS=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
