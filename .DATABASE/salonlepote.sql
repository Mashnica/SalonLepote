/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP DATABASE IF EXISTS `salon_lepote`;
CREATE DATABASE IF NOT EXISTS `salon_lepote` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `salon_lepote`;

DROP TABLE IF EXISTS `klijent`;
CREATE TABLE IF NOT EXISTS `klijent` (
  `klijentID` int NOT NULL AUTO_INCREMENT,
  `imeKlijent` varchar(10) NOT NULL,
  `prezimeKlijent` varchar(15) NOT NULL,
  `jmbgKlijent` varchar(13) NOT NULL,
  `adresaKlijent` varchar(50) DEFAULT NULL,
  `kontaktKlijent` varchar(30) NOT NULL,
  `usernameKlijent` varchar(50) NOT NULL,
  `lozinkaKlijent` varchar(50) NOT NULL,
  PRIMARY KEY (`klijentID`),
  UNIQUE KEY `jmbgKlijent` (`jmbgKlijent`),
  UNIQUE KEY `usernameKlijent` (`usernameKlijent`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DELETE FROM `klijent`;
/*!40000 ALTER TABLE `klijent` DISABLE KEYS */;
INSERT INTO `klijent` (`klijentID`, `imeKlijent`, `prezimeKlijent`, `jmbgKlijent`, `adresaKlijent`, `kontaktKlijent`, `usernameKlijent`, `lozinkaKlijent`) VALUES
	(1, 'Maja', 'Jovanović', '0506992810611', 'Gajeva 8', '0645432133', 'maja92', 'maja12'),
	(2, 'Anja', 'Jankovic', '0306992810411', 'Gogojeva 18', '0645432122', 'anja23', 'anja12'),
	(3, 'Marina', 'Markovic', '0306992810611', 'Gogojeva 18', '0645432122', 'maki23', 'maki12'),
	(4, 'Jelena', 'Nikolic', '0606992810511', 'Marsala Tita 34', '0615432122', 'jeja34', 'jeja34'),
	(5, 'Teodora', 'Jovicic', '0306992810612', 'Gogojeva 9', '0645432123', 'tea12', 'tea12'),
	(6, 'Kristina', 'Miljkovic', '0306992810613', 'Mose Pijade 23', '0645432124', 'kris23', 'kris23'),
	(7, 'Marko', 'Jankovic', '0306992810614', 'Save Kovacevica 2', '0645432125', 'marko12', 'marko12'),
	(8, 'Mihajlo', 'Milosevic', '0306992810615', 'Danila Kisa 3', '0645432126', 'mihajlo12', 'mihajlo12'),
	(9, 'Milos', 'Petric', '0306992810616', 'Gogojeva 183', '0645432127', 'milos23', 'milos23'),
	(10, 'Angelina', 'Kosanic', '0306992810617', 'Njegoseva 89', '0645432128', 'angelina12', 'angelina12');
/*!40000 ALTER TABLE `klijent` ENABLE KEYS */;

DROP TABLE IF EXISTS `manikir`;
CREATE TABLE IF NOT EXISTS `manikir` (
  `manikirID` int NOT NULL AUTO_INCREMENT,
  `VrstaManikira` varchar(30) NOT NULL,
  `VremeTrajManikir` int NOT NULL,
  `CenaManikira` int NOT NULL,
  PRIMARY KEY (`manikirID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DELETE FROM `manikir`;
/*!40000 ALTER TABLE `manikir` DISABLE KEYS */;
INSERT INTO `manikir` (`manikirID`, `VrstaManikira`, `VremeTrajManikir`, `CenaManikira`) VALUES
	(1, 'Klasican manikir', 20, 500),
	(2, 'SPA manikir', 40, 1500),
	(3, 'Aparaturni manikir', 20, 1500),
	(4, 'Francuski manikir', 30, 1100),
	(5, 'LUX manikir', 30, 2200);
/*!40000 ALTER TABLE `manikir` ENABLE KEYS */;

DROP TABLE IF EXISTS `masaza`;
CREATE TABLE IF NOT EXISTS `masaza` (
  `masazaID` int NOT NULL AUTO_INCREMENT,
  `VrstaMasaze` varchar(30) NOT NULL,
  `VremeTraj` int NOT NULL,
  `CenaMasaze` int NOT NULL,
  PRIMARY KEY (`masazaID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DELETE FROM `masaza`;
/*!40000 ALTER TABLE `masaza` DISABLE KEYS */;
INSERT INTO `masaza` (`masazaID`, `VrstaMasaze`, `VremeTraj`, `CenaMasaze`) VALUES
	(1, 'Relax masaza', 30, 200),
	(2, 'Anticelulit', 60, 1200),
	(3, 'Masaza celog tela', 30, 800),
	(4, 'Masaza vrata i ramena', 30, 500),
	(5, 'Kiropratik masaza', 120, 2000);
/*!40000 ALTER TABLE `masaza` ENABLE KEYS */;

DROP TABLE IF EXISTS `pedikir`;
CREATE TABLE IF NOT EXISTS `pedikir` (
  `pedikirID` int NOT NULL AUTO_INCREMENT,
  `VrstaPedikira` varchar(30) NOT NULL,
  `VremeTrajPedikir` int NOT NULL,
  `CenaPedikira` int NOT NULL,
  PRIMARY KEY (`pedikirID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DELETE FROM `pedikir`;
/*!40000 ALTER TABLE `pedikir` DISABLE KEYS */;
INSERT INTO `pedikir` (`pedikirID`, `VrstaPedikira`, `VremeTrajPedikir`, `CenaPedikira`) VALUES
	(1, 'Medicinski pedikir', 15, 500),
	(2, 'Peeling stopala', 30, 800),
	(3, 'Gel lak pedikir', 30, 1200),
	(4, 'Pedikir lak', 30, 450),
	(5, 'Pedikir+masaza stopala', 45, 1200);
/*!40000 ALTER TABLE `pedikir` ENABLE KEYS */;

DROP TABLE IF EXISTS `racun`;
CREATE TABLE IF NOT EXISTS `racun` (
  `racunID` int NOT NULL AUTO_INCREMENT,
  `BrRacuna` varchar(10) NOT NULL,
  `TipRacuna` varchar(10) NOT NULL,
  PRIMARY KEY (`racunID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DELETE FROM `racun`;
/*!40000 ALTER TABLE `racun` DISABLE KEYS */;
INSERT INTO `racun` (`racunID`, `BrRacuna`, `TipRacuna`) VALUES
	(1, '1223890', 'KARTICA'),
	(2, '1223891', 'KES'),
	(3, '1223892', 'KARTICA'),
	(4, '1223893', 'KARTICA'),
	(5, '1223894', 'KES'),
	(6, '1223895', 'KES'),
	(7, '1223896', 'KES'),
	(8, '1223897', 'KARTICA'),
	(9, '1223898', 'KES'),
	(10, '1223899', 'KES');
/*!40000 ALTER TABLE `racun` ENABLE KEYS */;

DROP TABLE IF EXISTS `termin`;
CREATE TABLE IF NOT EXISTS `termin` (
  `terminID` int NOT NULL AUTO_INCREMENT,
  `brojTermina` varchar(10) NOT NULL,
  `datumTermina` date NOT NULL,
  `Cena` int NOT NULL,
  `zaposleniID` int DEFAULT NULL,
  `uslugeSalonaID` int NOT NULL,
  PRIMARY KEY (`terminID`),
  KEY `zaposleniID` (`zaposleniID`),
  KEY `uslugeSalonaID` (`uslugeSalonaID`),
  CONSTRAINT `termin_ibfk_1` FOREIGN KEY (`zaposleniID`) REFERENCES `zaposleni` (`zaposleniID`),
  CONSTRAINT `termin_ibfk_2` FOREIGN KEY (`uslugeSalonaID`) REFERENCES `uslugesalona` (`uslugeSalonaID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DELETE FROM `termin`;
/*!40000 ALTER TABLE `termin` DISABLE KEYS */;
INSERT INTO `termin` (`terminID`, `brojTermina`, `datumTermina`, `Cena`, `zaposleniID`, `uslugeSalonaID`) VALUES
	(1, '0001', '2020-07-15', 8000, 1, 10),
	(2, '0002', '2020-07-16', 9000, 1, 9),
	(3, '0003', '2020-07-16', 8000, 1, 10),
	(4, '0004', '2020-07-17', 8000, 2, 8),
	(5, '0005', '2020-07-18', 10000, 3, 7),
	(6, '0006', '2020-07-19', 6000, 4, 6),
	(7, '0007', '2020-07-20', 8000, 5, 5),
	(8, '0008', '2020-07-21', 12000, 6, 4),
	(9, '0009', '2020-07-22', 15000, 7, 3),
	(10, '0010', '2020-07-22', 12000, 8, 2);
/*!40000 ALTER TABLE `termin` ENABLE KEYS */;

DROP TABLE IF EXISTS `tretmanlica`;
CREATE TABLE IF NOT EXISTS `tretmanlica` (
  `tretmanlicaID` int NOT NULL AUTO_INCREMENT,
  `VrstaTretmanaLica` varchar(30) NOT NULL,
  `VremeTrajTretmanaLica` int NOT NULL,
  `CenaTretmanaLica` int NOT NULL,
  PRIMARY KEY (`tretmanlicaID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DELETE FROM `tretmanlica`;
/*!40000 ALTER TABLE `tretmanlica` DISABLE KEYS */;
INSERT INTO `tretmanlica` (`tretmanlicaID`, `VrstaTretmanaLica`, `VremeTrajTretmanaLica`, `CenaTretmanaLica`) VALUES
	(1, 'Klasican tretman', 60, 2500),
	(2, 'LIFT&GLOW', 60, 4500),
	(3, 'Anti age tretman', 60, 5500),
	(4, 'Kolagen tretman', 60, 3500),
	(5, 'Hijaluron tretman', 60, 5500);
/*!40000 ALTER TABLE `tretmanlica` ENABLE KEYS */;

DROP TABLE IF EXISTS `uslugesalona`;
CREATE TABLE IF NOT EXISTS `uslugesalona` (
  `uslugeSalonaID` int NOT NULL AUTO_INCREMENT,
  `VrstaUslugeSalona` varchar(30) NOT NULL,
  `VremeTrajanja` int NOT NULL,
  `dostupnost` tinyint(1) DEFAULT NULL,
  `masazaID` int DEFAULT NULL,
  `pedikirID` int DEFAULT NULL,
  `manikirID` int DEFAULT NULL,
  `tretmanlicaID` int DEFAULT NULL,
  `klijentID` int NOT NULL,
  `racunID` int NOT NULL,
  PRIMARY KEY (`uslugeSalonaID`),
  KEY `masazaID` (`masazaID`),
  KEY `pedikirID` (`pedikirID`),
  KEY `manikirID` (`manikirID`),
  KEY `tretmanlicaID` (`tretmanlicaID`),
  KEY `klijentID` (`klijentID`),
  KEY `racunID` (`racunID`),
  CONSTRAINT `uslugesalona_ibfk_1` FOREIGN KEY (`masazaID`) REFERENCES `masaza` (`masazaID`),
  CONSTRAINT `uslugesalona_ibfk_2` FOREIGN KEY (`pedikirID`) REFERENCES `pedikir` (`pedikirID`),
  CONSTRAINT `uslugesalona_ibfk_3` FOREIGN KEY (`manikirID`) REFERENCES `manikir` (`manikirID`),
  CONSTRAINT `uslugesalona_ibfk_4` FOREIGN KEY (`tretmanlicaID`) REFERENCES `tretmanlica` (`tretmanlicaID`),
  CONSTRAINT `uslugesalona_ibfk_5` FOREIGN KEY (`klijentID`) REFERENCES `klijent` (`klijentID`),
  CONSTRAINT `uslugesalona_ibfk_6` FOREIGN KEY (`racunID`) REFERENCES `racun` (`racunID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DELETE FROM `uslugesalona`;
/*!40000 ALTER TABLE `uslugesalona` DISABLE KEYS */;
INSERT INTO `uslugesalona` (`uslugeSalonaID`, `VrstaUslugeSalona`, `VremeTrajanja`, `dostupnost`, `masazaID`, `pedikirID`, `manikirID`, `tretmanlicaID`, `klijentID`, `racunID`) VALUES
	(1, 'PAKET1', 120, 1, 1, 2, 1, 2, 3, 5),
	(2, 'PAKET2', 100, 1, 1, 2, 1, 2, 1, 1),
	(3, 'PAKET3', 90, 0, 2, 3, 4, 1, 2, 2),
	(4, 'FULL tretman', 160, 1, 3, 2, 3, 2, 4, 4),
	(5, 'Beauty paket', 220, 0, 2, 4, 5, 2, 5, 6),
	(6, 'Anti-aging paket', 120, 1, 1, 2, 1, 3, 6, 7),
	(7, 'BOTOX paket', 120, 1, 1, 2, 1, 5, 7, 8),
	(8, 'Akcija 4', 100, 0, 4, 2, 1, 2, 8, 9),
	(9, 'Lux paket', 80, 1, 1, 2, 5, 2, 9, 3),
	(10, 'lUX2 paket', 120, 1, 1, 2, 1, 2, 10, 10);
/*!40000 ALTER TABLE `uslugesalona` ENABLE KEYS */;

DROP TABLE IF EXISTS `zaposleni`;
CREATE TABLE IF NOT EXISTS `zaposleni` (
  `zaposleniID` int NOT NULL AUTO_INCREMENT,
  `imeZaposlenog` varchar(10) NOT NULL,
  `prezimeZaposlenog` varchar(15) NOT NULL,
  `jmbgZaposlenog` varchar(13) NOT NULL,
  `adresaZaposlenog` varchar(50) DEFAULT NULL,
  `korisnickoIme` varchar(50) NOT NULL,
  `lozinka` varchar(50) NOT NULL,
  `aktivan` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`zaposleniID`),
  UNIQUE KEY `jmbgZaposlenog` (`jmbgZaposlenog`),
  UNIQUE KEY `korisnickoIme` (`korisnickoIme`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DELETE FROM `zaposleni`;
/*!40000 ALTER TABLE `zaposleni` DISABLE KEYS */;
INSERT INTO `zaposleni` (`zaposleniID`, `imeZaposlenog`, `prezimeZaposlenog`, `jmbgZaposlenog`, `adresaZaposlenog`, `korisnickoIme`, `lozinka`, `aktivan`) VALUES
	(1, 'Miroslav', 'Nikolic', '1906995811234', 'Vojvodjanska 23', 'miso12', 'miso12', 1),
	(2, 'Mira', 'Zelic', '1906995811235', 'Djure Salaja 23', 'mira12', 'mira12', 1),
	(3, 'Anika', 'Nikoletic', '1906995811236', 'Safarikova 78', 'anika90', 'anika90', 1),
	(4, 'Nikolina', 'Micanovic', '1906995811237', 'Vojvodjanska 89', 'nina12', 'nina12', 1),
	(5, 'Milica', 'Nikolic', '1906995811238', 'Mose Pijade 3', 'mica12', 'mica12', 1),
	(6, 'Miroslava', 'Tot', '1906995811239', 'Milutinoviceva 34', 'mimi12', 'mimi12', 1),
	(7, 'Vera', 'Korab', '1806995811239', 'Vojvodjanska 93', 'vera12', 'vera12', 1),
	(8, 'Tara', 'Tintor', '1706995811239', 'Milutinoviceva 160', 'tara12', 'tara12', 1),
	(9, 'Nevena', 'Tulic', '1606995811239', 'Vojvode Supljikca 7', 'nena12', 'nena12', 1),
	(10, 'Iva', 'Lukic', '1506995811239', 'M.Tita 134', 'iva12', 'iva12', 1),
	(11, 'Ivana', 'Lukov', '5506995811239', 'M.T 134', 'ivana12', 'ivana12', 0),
	(12, 'Nikolina', 'Micanovic', '3906995811237', NULL, 'nina19', 'nina19', NULL);
/*!40000 ALTER TABLE `zaposleni` ENABLE KEYS */;

DROP TRIGGER IF EXISTS `Trigger_AktivnostZaposleni`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `Trigger_AktivnostZaposleni` BEFORE INSERT ON `termin` FOR EACH ROW BEGIN
     DECLARE message varchar(255);
     set @zaposleniID = new.zaposleniID;
     set @aktivan = (select aktivan from zaposleni where zaposleniID= @zaposleniID);
     if  @aktivan is false then
	   SET message = 'Zaposleni trenutno nije dostupan za vršenje usluge u datom terminu!!!';
	   SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = message;
	 end if;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

DROP TRIGGER IF EXISTS `Trigger_Dostupnost_UslugaSalona`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `Trigger_Dostupnost_UslugaSalona` BEFORE INSERT ON `termin` FOR EACH ROW BEGIN
     DECLARE message varchar(255);
     set @uslugeSalonaID = new.uslugeSalonaID;
     set @dostupnost = (select dostupnost from uslugeSalona where uslugeSalonaID = @uslugeSalonaID);
     if  @dostupnost is false then
	   SET message = 'Usluga salona trenutno nije dostupna.Nije moguce zakazati termin';
	   SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = message;
        
	 end if;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
