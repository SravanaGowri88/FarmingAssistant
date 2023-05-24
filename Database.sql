use Farming;
Create table FarmerLogin(ID int Identity(1,1) Primary Key,Name varchar(100),PhoneNo varchar(10),Address varchar(100),Password varchar(20))
select * from FarmerLogin
delete from FarmerLogin where ID=1009
TRUNCATE TABLE FarmerLogin

create proc usp_Login(@PhoneNo varchar(10),@Password varchar(20))
as
begin
select * from FarmerLogin where PhoneNo=@PhoneNo and Password=@Password;
end
exec usp_Registration niha,899, hyd, ioplkjh 

 select * from SupplierLogin

	create proc usp_Registration(@Name varchar(100),@PhoneNo varchar(100),@Address varchar(100),@Password varchar(20))
	as
	begin
	Insert into FarmerLogin (Name,PhoneNo,Address,Password) values(@Name,@PhoneNo,@Address,@Password)
Create table AdminLogin(ID int Identity(1,1) Primary Key,Name varchar(100),Password varchar(20))
create proc sp_Admin_Login(@Name varchar(100),@Password varchar(20))
as
begin
select * from AdminLogin where Name=@Name and Password=@Password;
end
update AdminLogin set Password='admin@admin' where ID=1

create table SupplierLogin (Supplier_ID int Identity(1,1) Primary Key,Supplier_Name varchar(100),MobileNo varchar(10),Address varchar(100),Password varchar(20))

create proc sp_supplier_login(@Supplier_Name varchar(20),@Password varchar(20))
as
begin
select * from SupplierLogin where Supplier_Name=@Supplier_Name and Password=@Password;
end

create proc sp_supplier_registration (@Supplier_Name varchar(20),@MobileNo varchar(10),@Address varchar(100),@Password varchar(20))
as
begin
insert into SupplierLogin(Supplier_Name,MobileNo,Address,Password) values(@Supplier_Name,@MobileNo,@Address,@Password);
end
select * from SupplierLogin
insert into SupplierLogin values('Kiran','9876543210','Hyderabad','kiran')

create proc sp_register(@Name varchar(100),@PhoneNo varchar(100),@Address varchar(100),@Password varchar(20))
as
begin
insert into SupplierLogin(Supplier_Name,MobileNo,Address,Password) values(@Name,@PhoneNo,@Address,@Password);
end
create table Crops(Crop_Id int identity(1,1) primary key,Crop_Name varchar(30))
insert into Crops values('Wheat')
create table Advertisement(Ad_Id int primary key identity(1,1),Crop_Id int references Crops(Crop_Id),Crop_Name varchar(20),Quantity int,Supplier_ID int references SupplierLogin(Supplier_ID),Mobile varchar(10),Sell varchar(10))
select * from Advertisement
insert into Advertisement values(1,'Wheat',100,'9876543210')
select * from Advertisement,Crops
how to add parameter where user can upload image in website in react js
delete from Advertisement where Ad_Id=6;
create table Crop_Recieved(Rec_Id int primary key identity(1,1), CropId int,Accept BIT, ID int, foreign key(ID) references FarmerLogin(ID))
create table SellCrop (CropId int primary key identity(1,1),Name varchar(20),CropName varchar(20),Quantity int, Rupees int,Status BIT)
drop table Sell_Crop
Alter table Sell_Crop change column FarmerName to Name;
ALTER TABLE Crop_Recieved ADD Status BIT;
ALTER TABLE Crop_Recieved
DROP COLUMN Accept;
insert into Sell_Crop values(1,'Niharika','Millets',20,100,0)
select * from Sell_Crop
ALTER TABLE Sell_Crop
ADD COLUMN ReceiverId INT,
ADD CONSTRAINT fk_ReceiverId
FOREIGN KEY (ReceiverId)
REFERENCES Crop_Receiver(Rec_Id);

ALTER TABLE Sell_Crop
ADD ReceiverId INT FOREIGN KEY REFERENCES Crop_Recieved(Rec_Id);

SELECT name
FROM sys.foreign_keys
WHERE parent_object_id = OBJECT_ID('Crop_Recieved');


ALTER TABLE Sell_Crop
DROP CONSTRAINT FK__Sell_Crop__ID__6EF57B66;

Alter table Sell_Crop
Drop Column ID

ALTER TABLE table_name
RENAME COLUMN old_name to new_name;
;
insert into Sell_Crop values()
select * from SellCrop

ALTER TABLE SellCrop
ALTER COLUMN Status varchar(20);

CREATE TRIGGER Sell_Crop_Insert_Trigger
ON Sell_Crop
AFTER INSERT
AS
BEGIN
    SET NOCOUNT ON;
    EXEC ('SELECT CR.Rec_Id, CR.CropId, CR.Accept, CR.ID, SC.Name, SC.CropName, SC.Quantity, SC.Rupees FROM Crop_Recieved CR INNER JOIN Sell_Crop SC ON CR.CropId = SC.CropId')
END
DROP TRIGGER Sell_Crop_Insert_Trigger;
 

CREATE TRIGGER trg_sell_crop_insert
ON Sell_Crop
AFTER INSERT
AS
BEGIN
    UPDATE Crop_Recieved
    SET Accept = 0 -- Set the default value of Accept column to 0
    FROM Crop_Recieved CR
    INNER JOIN inserted i ON CR.CropId = i.CropId
END
select* from Crop_Recieved

SELECT CR.Rec_Id, CR.CropId, CR.Accept, CR.ID, FL.Name, SC.CropName, SC.Quantity, SC.Rupees 
FROM Crop_Recieved CR 
INNER JOIN Sell_Crop SC ON CR.CropId = SC.CropId 
INNER JOIN FarmerLogin FL ON FL.ID = SC.ID;

CREATE TRIGGER tr_Sell_Crop_Insert_Update_Crop_Recieved
ON Sell_Crop
AFTER INSERT, UPDATE
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @CropId INT;
    DECLARE @ID INT;
    DECLARE @Name VARCHAR(100);
    DECLARE @CropName VARCHAR(20);
    DECLARE @Quantity INT;
    DECLARE @Rupees INT;

    SELECT @CropId = CropId, @ID = ID, @Name = Name, @CropName = CropName, @Quantity = Quantity, @Rupees = Rupees 
    FROM inserted;

    -- Check if a record already exists in Crop_Received for the given CropId
    IF EXISTS(SELECT * FROM Crop_Recieved WHERE CropId = @CropId)
    BEGIN
        -- Update the existing record with the new data from Sell_Crop
        UPDATE Crop_Recieved
        SET ID = @ID,
            Name = @Name,
            CropName = @CropName,
            Quantity = @Quantity,
            Rupees = @Rupees
        WHERE CropId = @CropId;
    END
    ELSE
    BEGIN
        -- Insert a new record in Crop_Received
        INSERT INTO Crop_Recieved (CropId, ID, Name, CropName, Quantity, Rupees)
        VALUES (@CropId, @ID, @Name, @CropName, @Quantity, @Rupees);
    END
END;

DROP TRIGGER tr_Sell_Crop_Insert_Update_Crop_Recieved
SELECT * FROM Crop_Received Crop_Recieved

CREATE TRIGGER tr_Sell_Crop_Insert_Update_Crop_Recieved
ON Sell_Crop
AFTER INSERT, UPDATE
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @CropId INT;
    DECLARE @ID INT;
    DECLARE @Name VARCHAR(100);
    DECLARE @CropName VARCHAR(20);
    DECLARE @Quantity INT;
    DECLARE @Rupees INT;

    SELECT @CropId = CropId, @ID = ID, @Name = Name, @CropName = CropName, @Quantity = Quantity, @Rupees = Rupees 
    FROM Sell_Crop SC
    INNER JOIN FarmerLogin FL ON FL.ID = SC.ID
    WHERE SC.CropId IN (SELECT CR.CropId FROM Crop_Recieved CR);

    -- Check if a record already exists in Crop_Received for the given CropId
    IF EXISTS(SELECT * FROM Crop_Recieved WHERE CropId = @CropId)
    BEGIN
        -- Update the existing record with the new data from Sell_Crop
        UPDATE Crop_Recieved
        SET ID = @ID,
            Name = @Name,
            CropName = @CropName,
            Quantity = @Quantity,
            Rupees = @Rupees
        WHERE CropId = @CropId;
    END
    ELSE
    BEGIN
        -- Insert a new record in Crop_Received
        INSERT INTO Crop_Recieved (CropId, ID, Name, CropName, Quantity, Rupees)
        VALUES (@CropId, @ID, @Name, @CropName, @Quantity, @Rupees);
    END
END;


CREATE TRIGGER tr_Sell_Crop_Insert_Update_Crop_Recieved
ON Sell_Crop
AFTER INSERT, UPDATE
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @CropId INT;
    DECLARE @ID INT;
    DECLARE @Name VARCHAR(100);
    DECLARE @CropName VARCHAR(20);
    DECLARE @Quantity INT;
    DECLARE @Rupees INT;

    SELECT @CropId = CropId, @ID = ID, @Name = FL.Name, @CropName = SC.CropName, @Quantity = SC.Quantity, @Rupees = SC.Rupees 
    FROM inserted AS SC
    INNER JOIN FarmerLogin AS FL ON FL.ID = SC.ID;

    -- Check if a record already exists in Crop_Received for the given CropId
    IF EXISTS(SELECT * FROM Crop_Recieved WHERE CropId = @CropId)
    BEGIN
        -- Update the existing record with the new data from Sell_Crop
        UPDATE Crop_Recieved
        SET ID = @ID,
            Name = @Name,
            CropName = @CropName,
            Quantity = @Quantity,
            Rupees = @Rupees
        WHERE CropId = @CropId;
    END
    ELSE
    BEGIN
        -- Insert a new record in Crop_Received
        INSERT INTO Crop_Recieved (CropId, ID, Name, CropName, Quantity, Rupees)
        VALUES (@CropId, @ID, @Name, @CropName, @Quantity, @Rupees);
    END
END;
CREATE TRIGGER tr_Sell_Crop_Insert_Update_Crop_Recieved
ON Sell_Crop
AFTER INSERT, UPDATE
AS
BEGIN
  UPDATE CR
  SET
    CR.Accept = 0, -- default value of Accept column
    CR.ID = inserted.ID,
    SC.CropName = inserted.CropName,
    SC.Quantity = inserted.Quantity,
    SC.Rupees = inserted.Rupees
  FROM Crop_Recieved CR
  INNER JOIN Sell_Crop SC ON CR.CropId = SC.CropId
  INNER JOIN inserted ON SC.CropId = inserted.CropId
  INNER JOIN FarmerLogin FL ON FL.ID = inserted.ID;

END;

CREATE VIEW Sell_Crop_Recieved_View AS
SELECT CR.Rec_Id, CR.CropId, CR.Accept, CR.ID, FL.Name, SC.CropName, SC.Quantity, SC.Rupees 
FROM Crop_Recieved CR 
INNER JOIN Sell_Crop SC ON CR.CropId = SC.CropId 
INNER JOIN FarmerLogin FL ON FL.ID = SC.ID;


CREATE TRIGGER tr_Sell_Crop_Insert_Update_Crop_Recieved
ON Sell_Crop
AFTER INSERT, UPDATE
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO Sell_Crop_Recieved_View (Rec_Id, CropId, Accept, ID, Name, CropName, Quantity, Rupees)
    SELECT CR.Rec_Id, i.CropId, CR.Accept, i.ID, FL.Name, i.CropName, i.Quantity, i.Rupees 
    FROM inserted i 
    INNER JOIN Crop_Recieved CR ON CR.CropId = i.CropId 
    INNER JOIN FarmerLogin FL ON FL.ID = i.ID;

END;


CREATE TRIGGER tr_Sell_Crop_Insert_Update_Crop_Recieved
ON Sell_Crop
AFTER INSERT, UPDATE
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO Crop_Recieved (CropId, ID)
    SELECT i.CropId, i.ID 
    FROM inserted i 
    WHERE NOT EXISTS (
        SELECT 1 FROM Crop_Recieved cr WHERE cr.CropId = i.CropId AND cr.ID = i.ID
    );

    UPDATE cr SET cr.Accept = 0
    FROM Crop_Recieved cr
    INNER JOIN inserted i ON cr.CropId = i.CropId AND cr.ID = i.ID;

END;

ALTER TABLE Sell_Crop
ADD Status varchar(10) NULL;



CREATE TRIGGER tr_Sell_Crop_Insert_Update_Crop_Recieved
ON Sell_Crop
AFTER INSERT, UPDATE
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO Crop_Recieved (CropId, ID)
    SELECT i.CropId, i.ID 
    FROM inserted i 
    WHERE NOT EXISTS (
        SELECT 1 FROM Crop_Recieved cr WHERE cr.CropId = i.CropId AND cr.ID = i.ID
    );

    UPDATE sc SET sc.Status = 'Accepted'
    FROM Sell_Crop sc
    INNER JOIN inserted i ON sc.CropId = i.CropId AND sc.ID = i.ID
    INNER JOIN Crop_Recieved cr ON cr.CropId = i.CropId AND cr.ID = i.ID
    WHERE cr.Accept = 1;

END;

ALTER TABLE Sell_Crop
DROP CONSTRAINT Sell_Crop_ReceiverId_fk;
select * from Crop_Recieved
Select* from Sell_Crop


ALTER TABLE Sell_Crop
DROP COLUMN ReceiverId;
Truncate table Crop_Recieved

CREATE TRIGGER tr_Sell_Crop_Insert_Update_Crop_Recieved
ON Sell_Crop
AFTER INSERT, UPDATE
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO Crop_Recieved (CropId, ID)
    SELECT i.CropId, i.ID 
    FROM inserted i 
    WHERE NOT EXISTS (
        SELECT 1 FROM Crop_Recieved cr WHERE cr.CropId = i.CropId AND cr.ID = i.ID
    );

    UPDATE sc SET sc.Status = 'Accepted'
    FROM Sell_Crop sc
    INNER JOIN inserted i ON sc.CropId = i.CropId AND sc.ID = i.ID
    INNER JOIN Crop_Recieved cr ON cr.CropId = i.CropId AND cr.ID = i.ID
    WHERE cr.Accept = 1;

END;

DROP TRIGGER tr_Sell_Crop_Insert_Update_Crop_Recieved

CREATE TRIGGER tr_Sell_Crop_Insert_Update_Crop_Reciever
ON Crop_Recieved
AFTER UPDATE
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @CropId INT, @ID INT, @Accept BIT;

    SELECT @CropId = CropId, @ID = ID, @Accept = Accept FROM inserted;

    IF @Accept = 1
    BEGIN
        UPDATE Sell_Crop SET Status = 'accepted' WHERE CropId = @CropId AND ID = @ID;
    END;
END;

select* from Sell_Crop
CREATE TABLE Complaints (
  Complaint_Id INT IDENTITY(1,1) PRIMARY KEY,
  Complaint_Desp VARCHAR(255),
  Complaint_Status BIT
);
select * from Complaints
Drop table Complaints

sp_rename 'Complaints.Complaint_Status', 'Status', 'COLUMN';


ALTER TABLE Complaints
ALTER COLUMN Status varchar(20);

create table Farming_Tips(TipID int primary key identity(1,1),FarmingTip varchar(80))
select * from Farming_Tips
insert into Farming_Tips values('Use Organic Pesticides')