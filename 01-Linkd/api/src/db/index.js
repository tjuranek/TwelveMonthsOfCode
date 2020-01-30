import mssql from 'mssql';

mssql.connect('mssql://admin:password@localhost/Linkd');

export { mssql as connection };
