CREATE TABLE `dietBoard` (
  `diet_board_content_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `writer` bigint(20) NOT NULL,
  `writeTime` datetime NOT NULL,
  `editTIme` datetime DEFAULT NULL,
  `content` varchar(1000) DEFAULT NULL,
  `picture` blob DEFAULT NULL,
  PRIMARY KEY (`diet_board_content_id`),
  KEY `dietBoard_FK` (`writer`),
  CONSTRAINT `dietBoard_FK` FOREIGN KEY (`writer`) REFERENCES `user` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4