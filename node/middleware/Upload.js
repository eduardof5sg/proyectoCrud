import multer from 'multer';

// Configuración de Multer para almacenar las imágenes en el directorio 'uploads'
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const ext = file.originalname.split('.').pop();
        cb(null, `${Date.now()}.${ext}`);
    }
});

const upload = multer({ storage: storage });

// Función middleware para manejar la carga de imágenes
export const uploadImage = upload.single('imageUrl'); // Campo del formulario donde se espera la imagen
