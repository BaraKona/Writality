"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cProjects_1 = require("../controllers/cProjects");
const router = express_1.default.Router();
router.post("/", cProjects_1.createProject);
router.get("/", cProjects_1.getAllProjects);
router.get("/:uid", cProjects_1.getProject);
router.get("/user/:uid", cProjects_1.getUserProjects);
exports.default = router;
//# sourceMappingURL=projects.js.map