import { Sequelize } from "sequelize";

// Koneksi ke database MySQL di GCP
const db = new Sequelize("notes", "root", "", {
  host: "34.60.102.191",
  dialect: "mysql",
  port: 3306,
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

// Tes koneksi
(async () => {
  try {
    await db.authenticate();
    console.log("✅ Database Connected to GCP!");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
})();

export default db;
