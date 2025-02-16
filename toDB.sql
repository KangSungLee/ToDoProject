-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        8.0.36 - MySQL Community Server - GPL
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- tododb 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `tododb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tododb`;

-- 테이블 tododb.category 구조 내보내기
CREATE TABLE IF NOT EXISTS `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `isDeleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 tododb.category:~5 rows (대략적) 내보내기
INSERT IGNORE INTO `category` (`id`, `name`, `createdAt`, `isDeleted`) VALUES
	(1, '일상', '2025-02-14 19:42:41', 0),
	(2, '업무', '2025-02-14 21:00:01', 0),
	(3, '운동', '2025-02-14 21:00:14', 0),
	(4, '취미', '2025-02-14 21:00:23', 0),
	(5, '학습', '2025-02-14 21:00:31', 0);

-- 테이블 tododb.todo 구조 내보내기
CREATE TABLE IF NOT EXISTS `todo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `categoryId` int DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `description` text,
  `status` enum('PENDING','IN_PROGRESS','COMPLETED') DEFAULT 'PENDING',
  `due_date` datetime DEFAULT NULL,
  `priority` enum('LOW','MEDIUM','HIGH') DEFAULT 'MEDIUM',
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `isDeleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `todo_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  CONSTRAINT `todo_ibfk_2` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 tododb.todo:~21 rows (대략적) 내보내기
INSERT IGNORE INTO `todo` (`id`, `userId`, `categoryId`, `title`, `description`, `status`, `due_date`, `priority`, `createdAt`, `updatedAt`, `isDeleted`) VALUES
	(1, 2, 1, '타이틀', '내용', 'PENDING', '2025-02-24 19:43:20', 'MEDIUM', '2025-02-14 19:43:35', '2025-02-14 19:43:35', 0),
	(7, 2, 5, '코딩 마무리2', '할일 마무리2', 'IN_PROGRESS', '2025-02-15 10:15:00', 'MEDIUM', '2025-02-15 03:44:30', '2025-02-15 18:45:53', 0),
	(8, 2, 3, '운동', '하체', 'IN_PROGRESS', '2025-02-14 09:00:00', 'MEDIUM', '2025-02-15 04:42:09', '2025-02-15 18:45:53', 0),
	(10, 2, 3, '운동2', '', 'PENDING', '2025-02-21 09:00:00', 'HIGH', '2025-02-15 04:59:07', '2025-02-15 04:59:07', 0),
	(11, 2, 3, '운동3', '3', 'COMPLETED', '2025-02-13 09:00:00', 'LOW', '2025-02-15 04:59:21', '2025-02-15 17:21:05', 0),
	(12, 2, 1, '점심약속', '친구와', 'IN_PROGRESS', '2025-02-15 11:00:00', 'MEDIUM', '2025-02-15 05:14:56', '2025-02-15 18:58:23', 0),
	(16, 2, 5, '할일제목2', '할일설명2', 'PENDING', '2025-02-20 09:00:00', 'LOW', '2025-02-15 16:38:32', '2025-02-15 16:38:55', 0),
	(17, 2, 1, '추가 테스트', '트2', 'IN_PROGRESS', '2025-02-12 09:00:00', 'LOW', '2025-02-15 17:38:22', '2025-02-15 18:45:53', 0),
	(20, 2, 1, '테스트', '할일\n', 'PENDING', '2025-02-12 09:00:00', 'MEDIUM', '2025-02-15 17:39:21', '2025-02-15 17:39:50', 1),
	(21, 2, 1, '테스트2', '입니다', 'IN_PROGRESS', '2025-02-12 09:00:00', 'MEDIUM', '2025-02-15 17:42:15', '2025-02-15 18:45:53', 0),
	(33, 2, 3, '제목', '응', 'IN_PROGRESS', '2025-02-11 16:15:00', 'MEDIUM', '2025-02-15 17:49:46', '2025-02-15 18:45:53', 0),
	(39, 2, 1, '제[뫃ㄱ', 'ㄴㅁㅇ', 'IN_PROGRESS', '2025-02-10 09:00:00', 'MEDIUM', '2025-02-15 17:51:51', '2025-02-15 18:45:53', 0),
	(43, 2, 3, 'ㅁㄴㅇㄹ', 'ㅁㄴㄹㅇ', 'PENDING', '2025-02-05 09:00:00', 'MEDIUM', '2025-02-15 17:54:10', '2025-02-15 17:54:22', 1),
	(44, 2, 1, 'ㅁㄴㅇ', 'ㅇㄴㅁ', 'COMPLETED', '2025-02-05 09:00:00', 'MEDIUM', '2025-02-15 17:55:23', '2025-02-15 17:55:29', 1),
	(45, 4, 1, 'cc', 'cc', 'IN_PROGRESS', '2025-02-12 09:00:00', 'HIGH', '2025-02-15 18:05:57', '2025-02-15 18:40:29', 0),
	(46, 4, 1, 'ss', 'ss', 'PENDING', '2025-02-28 18:00:00', 'HIGH', '2025-02-15 18:06:03', '2025-02-15 18:08:32', 0),
	(48, 4, 4, 'ㅁㄴㅇㄴㅁㄴㅇ', 'ㅇㅇㅁㄴㅁㄴㅇ', 'COMPLETED', '2025-02-26 09:00:00', 'MEDIUM', '2025-02-15 18:10:08', '2025-02-15 18:10:28', 1),
	(49, 2, 2, '스테이터스 확인', '확인용', 'IN_PROGRESS', '2025-02-15 16:55:00', 'LOW', '2025-02-15 18:46:22', '2025-02-15 18:58:23', 0),
	(50, 2, 2, 'ㅇㅁㄴ', 'ㄴㅇㅁ', 'IN_PROGRESS', '2025-02-16 09:00:00', 'MEDIUM', '2025-02-15 18:47:09', '2025-02-16 17:44:01', 0),
	(51, 2, 2, 'ㅁㄴㅇ', 'ㅁㅇㄴ', 'IN_PROGRESS', '2025-02-15 19:00:00', 'MEDIUM', '2025-02-15 18:59:21', '2025-02-15 19:00:03', 0),
	(52, 2, 3, '음', '흠', 'IN_PROGRESS', '2025-02-08 12:00:00', 'MEDIUM', '2025-02-15 19:09:36', '2025-02-15 19:11:50', 1);

-- 테이블 tododb.user 구조 내보내기
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `isDeleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `userId` (`email`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 tododb.user:~4 rows (대략적) 내보내기
INSERT IGNORE INTO `user` (`id`, `username`, `email`, `password`, `createdAt`, `isDeleted`) VALUES
	(1, '이강성', 'rkdtjd1020@naver.com', '$2a$10$JibwPO.KwYSEt7Xzsra/Me6ZsYN1nVmCx01W90JYXc3C6RmPCQ69W', '2025-02-09 17:24:37', 0),
	(2, '강성', '1@naver.com', '$2a$10$/DpQkTJm59A0d7EwdbGBpuk3dcexVr3liH92NTZ.T.o045PK4CITq', '2025-02-09 17:24:59', 0),
	(3, '이', '2@naver.com', '$2a$10$7UKtY59DBiP3ypd88hZHde1h3d8fuKNpIYUICS9eq9p.PLlYjZhSe', '2025-02-14 21:04:52', 0),
	(4, '강성', '3@naver.com', '$2a$10$9SbXX4ntmiqGYcpH5M5djeCeY27tFrwVKI0CgZGBlzEfB4QAuhLUq', '2025-02-15 18:05:32', 0);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
