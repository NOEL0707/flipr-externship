const mysql = require('mysql2/promise');


async function query(sql) {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOSTNAME,
    user: "root",
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  });
  try {
    const [rows, fields] = await connection.execute(sql);
    return [rows,fields];
  } catch (err) {
    // console.error('Error creating table:', err);
    throw err;
  } finally {
    await connection.end();
  }

}
async function insertQuery(sql,insertVal) {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOSTNAME,
    user: "root",
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  });

  try {
    console.log([insertVal]);
    const [result] = await connection.execute(sql, [insertVal]);
    return result;
  } catch (err) {
    // console.error('Error creating note:', err);
    throw err;
  } finally {
    await connection.end();
  }

}
module.exports={query,insertQuery}


