const pkg = require("pg");
const { Client } = pkg;

const client = new Client({
  connectionString:
    "postgres://enzekuzpjdhkvf:ae8ed7aecea7ff4bd58cc82cb77d07c8c711dcd36b89519001b047c2dadeaf2e@ec2-44-195-247-84.compute-1.amazonaws.com:5432/d1or5npflcu354",
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

module.exports = client;
