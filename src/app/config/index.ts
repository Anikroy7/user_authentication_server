import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUND,
  NODE_ENV: process.env.NODE_ENV,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
  payBaseUrl: process.env.AAMARPAY_BASE_URL,
  storeId: process.env.AAMARPAY_STORE_ID,
  signatureKey: process.env.AAMARPAY_SIGNATURE_KEY,
  server_base_url: process.env.SERVER_BASE_URL,
  client_base_url: process.env.CLIENT_BASE_URL,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
};
