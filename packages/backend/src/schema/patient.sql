-- Patient table schema
CREATE TABLE patient {
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INTEGER NOT NULL
}
