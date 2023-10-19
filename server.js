import mongoose from "mongoose";
import app from "./index.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI, {
    // .env dosyasındaki MONGO_URI Değişkenine Erişiyoruz ve Database Bağlantımızı Sağlıyoruz
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    // Bağlantı Hatasız Gerçekleşti ise Server Dinlemeye Başlıyor
    app.listen(PORT, () => {
      // 1.Parametre Olarak Dinleyeceği Portu Alıyor ve ALdığı Portu Dinlemeye Başladığında Fonksiyonu Tetikliyor
      console.log(`Go To Demo http://localhost:${PORT}/api/v1/hello`);
    });
  })
  .catch((err) => console.error(err));