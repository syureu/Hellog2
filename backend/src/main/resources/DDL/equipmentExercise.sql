CREATE TABLE `equipment_exercise` (
  `equipment_exercise_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `equipment_id` bigint(20) DEFAULT NULL,
  `exercise_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`equipment_exercise_id`),
  KEY `equipment_exercise_FK` (`equipment_id`),
  KEY `equipment_exercise_FK_1` (`exercise_id`),
  CONSTRAINT `equipment_exercise_FK` FOREIGN KEY (`equipment_id`) REFERENCES `equipment` (`equipment_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `equipment_exercise_FK_1` FOREIGN KEY (`exercise_id`) REFERENCES `exercise` (`exercise_id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4