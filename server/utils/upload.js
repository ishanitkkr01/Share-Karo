//yaha middleware banayege with the help of multer
import multer from 'multer';

const upload = multer({ dest: 'uploads'});

export default upload;