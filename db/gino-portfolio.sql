-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 07, 2019 at 04:14 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `GinoG-portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `gino-portfolio`
--

CREATE TABLE `gino-portfolio` (
  `id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `dev_notes` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `gino-portfolio`
--

INSERT INTO `gino-portfolio` (`id`, `name`, `type`, `avatar`, `dev_notes`) VALUES
(1, 'Cinema 4D Compilation Video', 'Video', 'GinoG-CompilationVideo.mp4', 'This is a compilation of a series of Cinema 4D videos that I created and/collaborated on.'),
(2, 'CityScape ', 'Video', 'CityScape-Final.mp4', 'The Cityscape video was made with additional inspiration from the Roku screensaver.'),
(3, 'Anglers Website', 'Website', 'https://github.com/ginoghal/Ghalehpardaz_G-Helder_J-Anglers.org', 'This Anglers project was a group project where we both contributed to the total build of the project.'),
(4, 'Music Mixer', 'Website', 'https://github.com/ginoghal/Ghalehpardaz_G_MusicMixer', 'This was a group project with me taking the lead on the Backend (Javascript) functionality.'),
(5, 'Tattoo Project', 'Image', 'GinoG_TattooProject.jpg', 'This tattoo project was meant to try and incorporate the design to your body as seamlessly as possible.'),
(6, 'Nintendo Switch Commercial', 'Video', 'Switch_Midterm.mp4', 'This was a fun project for me as I wanted to see how many different locations I could come up with.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gino-portfolio`
--
ALTER TABLE `gino-portfolio`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `gino-portfolio`
--
ALTER TABLE `gino-portfolio`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
