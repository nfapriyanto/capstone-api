require('dotenv').config();
const Hapi = require("@hapi/hapi");
const Inert = require('@hapi/inert');
const Path = require('path');
const fs = require('fs');
const routes = require("./routes");

// Fungsi untuk menghapus semua file di folder uploads
const clearUploadsFolder = () => {
    const uploadsDir = Path.join(__dirname, 'uploads');
    fs.readdir(uploadsDir, (err, files) => {
        if (err) {
            console.error('Error reading uploads directory:', err);
            return;
        }

        files.forEach(file => {
            // Skip .gitkeep file
            if (file === '.gitkeep') return;

            const filePath = Path.join(uploadsDir, file);
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error('Error deleting file:', filePath, err);
                    return;
                }
                console.log('Deleted file:', filePath);
            });
        });
    });
};

const init = async () => {
    // Comment out the line below to prevent clearing uploads folder on server start
    // clearUploadsFolder();

    const server = Hapi.server({
        port: 5000,
        host: process.env.NODE_ENV !== "production" ? "localhost" : "0.0.0.0",
        routes: {
            cors: {
                origin: ["*"],
            },
            files: {
                relativeTo: Path.join(__dirname) // Ubah ini
            }
        },
    });

    await server.register(Inert);
    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
