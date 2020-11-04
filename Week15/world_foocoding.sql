-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: world_foocoding
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `city_foo`
--

DROP TABLE IF EXISTS `city_foo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `city_foo` (
  `city_foo_id` int NOT NULL AUTO_INCREMENT,
  `city_foo_name` varchar(45) NOT NULL,
  PRIMARY KEY (`city_foo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city_foo`
--

LOCK TABLES `city_foo` WRITE;
/*!40000 ALTER TABLE `city_foo` DISABLE KEYS */;
INSERT INTO `city_foo` VALUES (1,'Lagos'),(2,'Kinshasa'),(3,'Cairo'),(4,'Giza'),(5,'Johannesburg'),(6,'Dar es Salaam'),(7,'Alexandria'),(8,'Abidjan'),(9,'Nairobi'),(10,'Casablanca'),(11,'Accra'),(12,'Cape Town'),(13,'Algiers'),(14,'Kumasi'),(15,'Addis Ababa'),(16,'Kano'),(17,'Luanda'),(18,'Ibadan'),(19,'Douala'),(20,'Omdurman');
/*!40000 ALTER TABLE `city_foo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `country_foo`
--

DROP TABLE IF EXISTS `country_foo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `country_foo` (
  `country_foo_id` int NOT NULL AUTO_INCREMENT,
  `country_foo_name` varchar(45) NOT NULL,
  PRIMARY KEY (`country_foo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country_foo`
--

LOCK TABLES `country_foo` WRITE;
/*!40000 ALTER TABLE `country_foo` DISABLE KEYS */;
INSERT INTO `country_foo` VALUES (1,'Nigeria'),(2,'Burkina Faso'),(3,'Egypt'),(4,'South Africa'),(5,'Tanzania'),(6,'Cote d\'Ivoire'),(7,'Kenya'),(8,'Morocco'),(9,'Ghana'),(10,'Algeria'),(11,'Ethiopia'),(12,'Angola'),(13,'Cameroon'),(14,'Mali'),(15,'Zambia'),(16,'Guinea'),(17,'Somalia'),(18,'Uganda'),(19,'Zimbabwe'),(20,'Togo');
/*!40000 ALTER TABLE `country_foo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-04 19:33:54
