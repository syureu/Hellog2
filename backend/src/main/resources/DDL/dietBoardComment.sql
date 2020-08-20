CREATE TABLE `diet_boar_comment` (
  `diet_board_comment_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `diet_board_content_id` bigint(20) NOT NULL,
  `writer` bigint(20) NOT NULL,
  `write_time` datetime NOT NULL,
  `edit_time` datetime DEFAULT NULL,
  `content` varchar(255) NOT NULL,
  `reference_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`diet_board_comment_id`),
  KEY `diet_boar_comment_FK` (`writer`),
  KEY `diet_boar_comment_FK_1` (`diet_board_content_id`),
  KEY `diet_boar_comment_FK_2` (`reference_id`),
  CONSTRAINT `diet_boar_comment_FK` FOREIGN KEY (`writer`) REFERENCES `user` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `diet_boar_comment_FK_1` FOREIGN KEY (`diet_board_content_id`) REFERENCES `diet_board` (`diet_board_content_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `diet_boar_comment_FK_2` FOREIGN KEY (`reference_id`) REFERENCES `diet_boar_comment` (`diet_board_comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4