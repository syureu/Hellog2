CREATE TABLE pjt1track3.`user` (
	id BIGINT(20) auto_increment NOT NULL,
	username varchar(20) NOT NULL,
	password varchar(255) NOT NULL,
	name varchar(20) NOT NULL,
	age int(11) NOT NULL,
	phone varchar(255) NOT NULL,
	male bit(1) NOT NULL,
	sign_up_day datetime NOT NULL,
	height int(11) NOT NULL,
	weight int(11) NOT NULL,
	gym_id bigint(20) NULL,
	active int(11) NOT NULL,
	limit_permit_day DATETIME NOT NULL,
	roles varchar(255) DEFAULT NULL NULL,
	permissions varchar(255) DEFAULT NULL NULL,
	CONSTRAINT user_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;

ALTER TABLE pjt1track3.`user` ADD CONSTRAINT user_FK FOREIGN KEY (gym_id) REFERENCES pjt1track3.gym(gym_id) ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE pjt1track3.`user` ADD CONSTRAINT user_UN UNIQUE KEY (username);
