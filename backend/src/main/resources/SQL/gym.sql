CREATE TABLE pjt1track3.gym (
	gym_id BIGINT(20) auto_increment NOT NULL,
	name varchar(255) NOT NULL,
	location varchar(255) NOT NULL,
	phone varchar(255) NOT NULL,
	representative BIGINT(20) NULL,
	CONSTRAINT gym_PK PRIMARY KEY (gym_id),
	CONSTRAINT gym_FK FOREIGN KEY (representative) REFERENCES pjt1track3.`user`(id) ON DELETE CASCADE ON UPDATE CASCADE
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;
