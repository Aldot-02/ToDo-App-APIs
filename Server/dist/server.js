"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const tasksRoute_1 = __importDefault(require("./routes/tasksRoute"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = parseInt(process.env.PORT || '9000');
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
const CONNECTION = process.env.MONGODB_URL;
if (!CONNECTION) {
    console.error('MongoDB connection string is not provided.');
    process.exit(1);
}
mongoose_1.default.connect(CONNECTION)
    .then(() => console.log("Connected to Database"))
    .catch((error) => console.error(error));
app.use(tasksRoute_1.default);
app.listen(PORT, () => console.log(`Listening on: ${PORT}`));
//# sourceMappingURL=server.js.map