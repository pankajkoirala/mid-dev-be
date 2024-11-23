import multer, { Multer } from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

// Initialize Multer with storage configuration
const upload: Multer = multer({
  storage,
  fileFilter: (req, file, cb) => {
    // Accept only images
    if (!file.mimetype.startsWith("image/")) {
      cb(new Error("Only image files are allowed!") as any, false);
    } else {
      cb(null, true);
    }
  },
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5 MB
});

export { upload };
