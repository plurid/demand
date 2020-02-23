const homedir = require('os').homedir();

import {
    execSync,
} from 'child_process';



export const runCommand = (
    command: string,
) => {
    try {
        const commandData = execSync(
            command,
            {
                cwd: homedir,
            },
        );

        return commandData.toString();
    } catch (error) {
        return 'invalid command';
    }
}
