CREATE TABLE `gym` (
  `gym_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `location` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `representative` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`gym_id`),
  KEY `gym_FK` (`representative`),
  CONSTRAINT `gym_FK` FOREIGN KEY (`representative`) REFERENCES `user` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4