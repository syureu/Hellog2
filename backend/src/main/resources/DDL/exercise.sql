CREATE TABLE `exercise` (
  `exercise_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `part` varchar(255) NOT NULL,
  PRIMARY KEY (`exercise_id`),
  UNIQUE KEY `exercise_UN` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4