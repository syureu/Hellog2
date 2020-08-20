CREATE TABLE `record` (
  `record_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `id` bigint(20) NOT NULL,
  `equipment_exercise_id` bigint(20) NOT NULL,
  `set` int(11) NOT NULL,
  `weight` varchar(255) DEFAULT NULL,
  `count` int(11) NOT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime NOT NULL,
  PRIMARY KEY (`record_id`),
  KEY `record_FK` (`id`),
  KEY `record_FK_1` (`equipment_exercise_id`),
  CONSTRAINT `record_FK` FOREIGN KEY (`id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `record_FK_1` FOREIGN KEY (`equipment_exercise_id`) REFERENCES `equipment_exercise` (`equipment_exercise_id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4