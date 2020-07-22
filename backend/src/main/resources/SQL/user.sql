CREATE TABLE pjt1track3.`user` (
	id varchar(20) NOT NULL,
	pw varchar(20) NOT NULL,
	name varchar(30) NOT NULL,
	age INT NOT NULL,
	phone varchar(11) NOT NULL,
	male BOOL NOT NULL,
	sign_up_day DATETIME DEFAULT now() NOT NULL,
	height INT NOT NULL,
	weight INT NOT NULL,
	gym_id INT NULL,
	CONSTRAINT User_PK PRIMARY KEY (id),
	CONSTRAINT User_FK FOREIGN KEY (gym_id) REFERENCES pjt1track3.gym(id) ON DELETE SET NULL ON UPDATE CASCADE
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;