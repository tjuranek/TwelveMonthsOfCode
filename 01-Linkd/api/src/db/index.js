import mssql from 'mssql';

mssql.connect('mssql://admin:password@localhost/mydb');

export { mssql as connection };