
DROP TABLE IF EXISTS `biz_listings`;

CREATE TABLE `biz_listings` (
  `id_info` int NOT NULL,
  `id_category` int NOT NULL,
  PRIMARY KEY (`id_info`,`id_category`),
  KEY `id_category` (`id_category`),
  CONSTRAINT `biz_listings_ibfk_1` FOREIGN KEY (`id_info`) REFERENCES `info` (`id`),
  CONSTRAINT `biz_listings_ibfk_2` FOREIGN KEY (`id_category`) REFERENCES `category` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `biz_listings` WRITE;
INSERT INTO `biz_listings` VALUES (1,1),(3,1),(2,9),(4,9),(5,9);

UNLOCK TABLES;

DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


LOCK TABLES `category` WRITE;

INSERT INTO `category` VALUES (1,'Automotive Parts and Suppliers'),(2,'Seafood Stores and Restaurants'),(3,'Health and Beauty'),(4,'Schools and Colleges'),(9,'technical');

UNLOCK TABLES;

DROP TABLE IF EXISTS `info`;

CREATE TABLE `info` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_biz` varchar(50) DEFAULT NULL,
  `adress_biz` varchar(50) DEFAULT NULL,
  `city_biz` varchar(50) DEFAULT NULL,
  `telephone_biz` varchar(50) DEFAULT NULL,
  `url_biz` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `info` WRITE;

INSERT INTO `info` VALUES (1,'HUST Corp','1 Dai co viet','Ha Noi','0987361812','hust.edu.vn'),(2,'VC Corp','85 Vu Trong Phung','Ha Noi','0912354123','vccorp.com'),(3,'PiGroup','Ngo goc de','Hanoi','0987361811','pigroup.tk'),(4,'VNG','Quan 1','TPHCM','0123456789','vng.com'),(5,'Viettel','Hoa lac','Hanoi','0999123553','viettel.com');

UNLOCK TABLES;
