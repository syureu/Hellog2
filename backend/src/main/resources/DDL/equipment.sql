CREATE TABLE `equipment` (
  `equipment_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `gym_id` bigint(20) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`equipment_id`),
  KEY `equipment_FK` (`gym_id`),
  CONSTRAINT `equipment_FK` FOREIGN KEY (`gym_id`) REFERENCES `gym` (`gym_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

ALTER TABLE pjt1track3.equipment MODIFY COLUMN gym_id bigint(20) NOT NULL;
