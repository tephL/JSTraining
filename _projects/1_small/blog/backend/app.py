import mysql.connector

conn = mysql.connector.connect(
    host = "localhost",
    user = "root",
    password = "1234",
    database = "test"
)

print(conn)

cursor = conn.cursor();

cursor.execute("INSERT INTO test_users(username, age) VALUES ('Stephen', 19)")
conn.commit();

print(cursor)
