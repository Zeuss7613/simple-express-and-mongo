import mongoose from "mongoose";

const exampleSchema = new mongoose.Schema( // Yeni bir MongoDb Şeması Oluşturuyoruz
  {
    exampleField: String, // Bu Şekilde Kullanabiliriz
    exampleField2: {
      // Bu Şekilde de Kullanabiliriz
      required: true,
      type: String,
    },
  },
  { timestamps: true } // Buraya Farklı Optionslar da Ekleyebilirsiniz collection gibi
);

export default mongoose.model("example", exampleSchema); // example's adında bir model oluşturduk sondaki 's takısıını mongodb ekliyor
