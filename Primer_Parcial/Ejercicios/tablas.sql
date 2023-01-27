/* database: ejercicio1_dappwb1*/

CREATE TABLE IF NOT EXISTS personas (
    ID_Persona int AUTO_INCREMENT,
    Nombre varchar(56) null,
    Apellido varchar(56) null,
    Fecha_Nacimiento varchar(100) null,
    Primary Key(ID_Persona)
);

CREATE TABLE IF NOT EXISTS telefonos (
    ID_Telefono int AUTO_INCREMENT,
    Telefono varchar(20) null,
    ID_Persona int null,
    Primary Key(ID_Telefono),
    Foreign KEY(ID_Persona) REFERENCES personas(ID_Persona)
);