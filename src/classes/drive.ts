/**
 * Class with drive information.
 *
 * @author Cristiam Mercado, Inky
 */
export default class Drive {


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
    public constructor(
        public filesystem: string, 
        public blocks: number, 
        public used: number, 
        public available: number, 
        public capacity: string, 
        public mounted: string, 
        public volumeName: string = "") {

    }

    
}
