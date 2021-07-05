/**
 * Class with drive information.
 *
 * @author Cristiam Mercado, Inky
 */
export default class Drive {
    filesystem: string;
    blocks: number;
    used: number;
    available: number;
    capacity: string;
    mounted: string;
    volumeName: string;
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
    constructor(filesystem: string, blocks: number, used: number, available: number, capacity: string, mounted: string, volumeName?: string);
}
