import fs from "fs";
import path from "path";

interface FileDetails {
    size: string;
    lastModified: string;
    extension: string;
}

function getFileDetails(filePath: string): FileDetails {
    const stats = fs.statSync(filePath);
    const ext = path.extname(filePath) || "none";
    const sizeInKB = (stats.size / 1024).toFixed(2);

    return {
        size: `${sizeInKB} KB`,
        lastModified: stats.mtime.toLocaleString(),
        extension: ext,
    };
}

export { FileDetails, getFileDetails };
