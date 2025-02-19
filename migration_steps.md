# Database Migration Steps: MySQL to PostgreSQL

1. Install PostgreSQL dependencies:
```bash
npm uninstall mysql2
npm install pg pg-promise
```

2. Update database configuration and connection code
3. Review and modify SQL queries (if any) to ensure PostgreSQL compatibility
4. Test the application with the new PostgreSQL connection
5. Execute data migration (if needed)

Migration Steps Completed:
1. Installed PostgreSQL dependencies (pg)
2. Updated database configuration in db.ts
3. Modified SQL queries in routes to use PostgreSQL syntax:
   - Changed parameterized query syntax from ? to $1, $2, etc.
   - Updated query result handling to use result.rows
   - Removed MySQL-specific pool.execute calls

Next Steps:
1. Create the necessary tables in PostgreSQL database using schema.sql
2. Set up the environment variables:
   - Copy .env.example to .env
   - Update the values with your PostgreSQL credentials
3. Migrate existing data from MySQL to PostgreSQL using:
   ```bash
   # Export data from MySQL
   mysqldump -u [mysql_user] -p [mysql_database] > mysql_backup.sql
   
   # Import to PostgreSQL (after adjusting syntax if needed)
   psql -U root -d [postgres_database] -f mysql_backup.sql
   ```
4. Test the application thoroughly with the new PostgreSQL connection

Note: Schema has been created in schema.sql - run this first to set up your PostgreSQL database structure.

Final Configuration Steps:
1. Install PostgreSQL if not already installed
2. Create a new PostgreSQL database:
```bash
psql -U postgres
CREATE DATABASE your_database_name;
\q
```
3. Create .env file from .env.example and update with your credentials:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=Harshil2002@123
DB_NAME=your_database_name
DB_PORT=5432
```
4. Run the schema.sql file to create tables:
```bash
psql -U root -d your_database_name -f schema.sql
```
5. Start the application and test the endpoints