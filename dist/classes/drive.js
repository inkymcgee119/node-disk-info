"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class with drive information.
 *
 * @author Cristiam Mercado, Inky
 */
var Drive = /** @class */ (function () {
    /**
     * Constructor for Drive class.
     *
     * @param {string} filesystem Drive filesystem.
     * @param {number} blocks Blocks associated to disk.
     * @param {number} used Used disk space.
     * @param {number} available Available disk space.
     * @param {string} capacity Disk capacity.
     * @param {string} mounted Indicates the mount point of the disk.
     * @param {string} volumeName Indicates the drive name
     */
    function Drive(filesystem, blocks, used, available, capacity, mounted, volumeName) {
        if (volumeName === void 0) { volumeName = ""; }
        this.filesystem = filesystem;
        this.blocks = blocks;
        this.used = used;
        this.available = available;
        this.capacity = capacity;
        this.mounted = mounted;
        this.volumeName = volumeName;
    }
    return Drive;
}());
exports.default = Drive;
